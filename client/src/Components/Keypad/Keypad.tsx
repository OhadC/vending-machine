import * as React from 'react';
import './Keypad.css';

class Keypad extends React.Component<any, any> {
    readonly buttons = ['A', 'B', 'C', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    constructor(props: any) {
        super(props);
        this.state = {
            screenContent: "",
            budgetInput: 0
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

    onBudgetInputChangeHandler = (e: any) => {
      this.setState({
          budgetInput: e.target.value
      });
    };

    onSetBudgetHandler = () => {
        this.props.setBudget(+this.state.budgetInput);
        this.setState({
            budgetInput: 0
        });
    };

    onButtonClickHandler = (key: any, e: any) => {
        // TODO: validations - string must have letter as first char and not exceed 3 chars
        console.log(key);
        this.setState({
            screenContent: this.state.screenContent + key
        });
    };


    onBuyClickHandler = () => {
        this.props.onBuy(this.state.screenContent.toLowerCase());
        this.onCancelClickHandler();
    };

    onCancelClickHandler = () => {
      this.setState({
          screenContent: ""
      });
    };

    public render() {
        console.log(this.props.budget);
        return (
            <>
                <div className="budget">
                    <h3>Your budget: <span>{this.props.budget.toFixed(2)}</span></h3>
                    <input type="text" placeholder="insert coins..." onChange={this.onBudgetInputChangeHandler} value={this.state.budgetInput}/>
                    <button onClick={this.onSetBudgetHandler}>Pay</button>
                </div>
                <div className="keypad">
                    <input className="keypad-display" value={this.state.screenContent}
                           placeholder="Hi!, select a product..."/>
                    <div className="keypad-buttons">
                        {this.buildButtons()}
                    </div>
                    <button type="button" onClick={this.onBuyClickHandler}>Buy</button>
                    <button type="button" onClick={this.onCancelClickHandler}>Cancel</button>
                </div>
            </>
        )
    }
}

export default Keypad;