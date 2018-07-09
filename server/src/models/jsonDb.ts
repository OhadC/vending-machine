import * as util from 'util'
import * as fs from 'fs'
import * as _ from 'lodash'

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class DB {
    private db: { [key: string]: Object[] } = {}
    private throttleFiles: { [name: string]: boolean } = {}

    constructor() { }

    async find(dbName: string, conditions?: Object): Promise<any[]> {
        if (!(dbName in this.db)) {
            await this.fetchDb(dbName)
        }
        if (!conditions) {
            return this.db[dbName]
        }
        return this.db[dbName].filter(dict => this.isMatching(dict, conditions))
    }

    async findOne(dbName: string, conditions: Object): Promise<any> {
        if (!(dbName in this.db)) {
            await this.fetchDb(dbName)
        }
        const index = this.db[dbName].findIndex(dict => this.isMatching(dict, conditions))
        if (index !== -1) {
            return this.db[dbName][index]
        }
        return null
    }

    async add(dbName: string, dict: any) {
        if (!(dbName in this.db)) {
            await this.fetchDb(dbName)
        }

        const newId = Date.now() + "" // good enouth for now. mongoDB will fix that
        dict['id'] = newId
        this.db[dbName].push(dict)
        await this.writeToJson(dbName)
        return dict as any
    }

    async update(dbName: string, conditions: Object, updatedFields: Object) {
        if (!(dbName in this.db)) {
            await this.fetchDb(dbName)
        }

        const index = this.db[dbName].findIndex(dict => this.isMatching(dict, conditions))
        if (index !== -1) {
            const updatedDict = {...this.db[dbName][index], ...updatedFields}
            this.db[dbName][index] = updatedDict
            await this.writeToJson(dbName)
            return updatedDict
        } else {
            return { error: 'No matching' }
        }
    }

    async delete(dbName: string, conditions: Object) {
        if (!(dbName in this.db)) {
            await this.fetchDb(dbName)
        }

        this.db[dbName] = this.db[dbName].filter(dict => !this.isMatching(dict, conditions))
        this.writeToJson(dbName)
        return { success: true }
    }

    private async fetchDb(dbName: string): Promise<void> {
        this.db[dbName] = await this.readFromJson(dbName)
    }

    private isMatching(dict, conditions) {
        for (const key in conditions) {
            if (!(key in dict)) return false
            if (Array.isArray(dict[key])) {
                if (Array.isArray(conditions[key])) {
                    for (const item in conditions[key]) {
                        if (!_.includes(dict[key], item)) return false
                    }
                } else {
                    if (!_.includes(dict[key], conditions[key])) return false
                }
            } else {
                if (dict[key] !== conditions[key]) return false
            }
        }
        return true
    }

    private async readFromJson(name: string) {
        const text = await readFileAsync(`./mock-data/${name}.json`, 'utf8')
        return JSON.parse(text)
    }
    private async writeToJson(name: string) {
        if (this.throttleFiles[name]) return
        this.throttleFiles[name] = true
        setTimeout(
            () => {
                // writeFileAsync(`./mock-data/${name}.json`, JSON.stringify(this.db[name]))
                this.throttleFiles[name] = false
            }, 1000)
    }
}

export default new DB()
