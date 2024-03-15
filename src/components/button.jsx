import React, { Component } from "react";

export class Counter extends Component {
    static defaultProps = {
        step: 1,
        initialValue: 0,
    };

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         value: this.props.initialValue,
    //     }
    // }

    state = { value: this.props.initialValue, }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     this.handleDecrement = this.handleDecrement.bind(this);
    // }

    handleIncrement = evt => {
        console.log("Клікнуто на кнопці Increment button!", evt);
        console.log("this.props: ", this.props);

        this.setState((state, props) => ({value: state.value + props.step}))
    }

    handleDecrement = evt => {
        console.log("Клікнуто на кнопці Decrement button!", evt);
        console.log("this.props: ", this.props);

        this.setState((state, props) => ({value: state.value - props.step}))
    }

    render() {
        const { step } = this.props;

        return (
            <div>
                <span>{this.state.value}</span>
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
                        >Decrement by {step}</button>
            </div>
        )
    }
}

