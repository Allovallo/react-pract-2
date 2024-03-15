import { React, Component } from "react";

export class SignUpForm extends Component {
    state = {
        login: '',
    };

    handleChange = e => {
        this.setState({login: e.target.value})
    }

    handleSubmit = evt => {
        evt.preventDefault();
        console.log(`Signed up as: ${this.state.login}`);

        this.props.onSubmit({...this.state})
    }

    render() {
        const { login } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        placeholder="Enter login"
                        value={login}
                        onChange={this.handleChange}
                    />
                </label>

                <button type="submit">Signed up as { login }</button>
            </form>
        )
    }
}