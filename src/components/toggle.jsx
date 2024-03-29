import React, { Component } from "react";

export class Toggle extends Component {
    state = { isOpen: false };

    // show = () => this.setState({ isOpen: true });
    // hide = () => this.setState({ isOpen: false });

    toggle = () => {
        this.setState(state => ({isOpen: !state.isOpen}))
    }

    render() { 
        const { isOpen } = this.state;
        const { children } = this.props;

        return (
            <>
                {/* <button onClick={this.show}>Show</button>
                <button onClick={this.hide}>Hide</button> */}
                <button onClick={this.toggle}>{ isOpen ? 'Hide' : 'Show'}</button>
                {isOpen && children}
            </>   
        )
    } 
}