import * as React from 'react';
import './Keypad.css';

class Keypad extends React.Component<any, any> {
    readonly buttons = ['A', 'B', 'C', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    constructor(props: any) {
        super(props);
        this.state = {
            screenContent: ""
        };

    }

    buildButtons = () => {
        return this.buttons.map((btn, idx) => (
            <button key={idx}
                    name={btn}
                    className="keypad-button"
                    onClick={this.onButtonClickHandler.bind(this, btn)}>
                {btn}
            </button>
        ));
    };

    onButtonClickHandler = (key: any, e: any) => {
        // TODO: validations - string must have letter as first char and not exceed 3 chars
        console.log(key);
        this.setState({
            screenContent: this.state.screenContent + key
        });
    };

    onBuyClickHandler = () => {
        console.log(this.state.screenContent.toLowerCase());
        this.props.onBuy(this.state.screenContent.toLowerCase());
    };

    public render() {
        return (
            <div className="keypad">
                <input className="keypad-display" value={this.state.screenContent}
                       placeholder="Hi!, select a product..."/>
                <div className="keypad-buttons">
                    {this.buildButtons()}
                </div>
                <button type="button" onClick={this.onBuyClickHandler}>Buy</button>
            </div>
        )
    }
}

export default Keypad;