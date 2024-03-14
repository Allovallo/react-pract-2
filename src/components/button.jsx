import React, { Component } from "react";

export class Counter extends Component {
    static defaultProps = {
        step: 1,
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     this.handleDecrement = this.handleDecrement.bind(this);
    // }

    handleIncrement = evt => {
        console.log("Клікнуто на кнопці Increment button!", evt);
        console.log("this.props: ", this.props);
    }

    handleDecrement = evt => {
        console.log("Клікнуто на кнопці Decrement button!", evt);
        console.log("this.props: ", this.props);
    }

    render() {
        const { step } = this.props;

        return (
            <div>
                <span>0</span>
                <button
                    type="button"
                    onClick={this.handleIncrement}
                    // onClick={evt => {
                    //     console.log("Клікнуто на кнопці Increment button!", evt);
                    //     console.log("this.props: ", this.props);
                    // }}
                        >Increment by {step}</button>
                <button
                    type="button"
                    onClick={this.handleDecrement}
                    // onClick={evt => {
                    //     console.log("Клікнуто на кнопці Decrement button!", evt);
                    //     console.log("this.props: ", this.props);                        
                    // }}
                        >Increment by {step}</button>
            </div>
        )
    }
}

