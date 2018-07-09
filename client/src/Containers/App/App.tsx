import * as React from 'react';
import './App.css';
import {connect} from "react-redux";
import * as actionTypes from '../../Store/actionTypes';
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
                            <Keypad onBuy={this.props.onBuy} budget={this.props.budget} setBudget={this.props.setBudget}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        inventory: state.inventory,
        budget: state.budget
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onBuy: (code: string) => dispatch(thunks.buyProduct(code)),
        setBudget: (amount: number) => dispatch({type: actionTypes.SET_BUDGET, payload: {amount}})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
