import * as React from 'react';
import './App.css';
import {connect} from "react-redux";
import Display from "../../Components/Display/Display";
import Keypad from "../../Components/Keypad/Keypad";


class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <h1>Vending Machine</h1>
                <div className="container">
                    <Display/>
                    <Keypad/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = () => {
    return {

    }
};

const mapDispatchToProps = () => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
