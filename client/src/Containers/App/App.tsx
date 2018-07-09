import * as React from 'react';
import './App.css';
import {connect} from "react-redux";
import * as thunks from '../../Store/thunks';
import Display from "../../Components/Display/Display";
import Keypad from "../../Components/Keypad/Keypad";


class App extends React.Component<any, any> {
    public render() {
        return (
            <div className="App">
                <div>
                    <h1>Vending Machine</h1>
                    <div className="container">
                        <div className="display-wrapper">
                            <Display inventory={this.props.inventory}/>
                        </div>
                        <div className="keypad-wrapper">
                            <Keypad onBuy={this.props.onBuy}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        inventory: state.inventory
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onBuy: (code: String) => dispatch(thunks.buyProduct(code))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
