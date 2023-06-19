import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import Auth from "../../Auth"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { setLoggedInUser } from "../../Redux/Actions"

import "./Login.css"


class ConnectedLogin extends Component {
    state = {
        userName: "",
        pass: "",
        redirectToReferrer: false

    }
    render() {

        const { from } = this.props.location.state || { from: { pathname: '/' } }


        /* If user was authenticated, redirect her to where she came from. */
        if (this.state.redirectToReferrer === true) {
            return <Redirect to={from} />
        }


        return (
            <div className="login-container">
                <div style={{ marginBottom: 50, fontSize: 26, textAlign: "center", color: "black" }}> Добро пожаловать в Shop Now! </div>
                <TextField
                    value={this.state.userName}
                    placeholder="Введите имя пользователя"
                    onChange={(e) => {
                        this.setState({ userName: e.target.value })
                    }} />
                <TextField
                    value={this.state.pass}
                    type="password"
                    placeholder="Введите пароль"
                    onChange={(e) => {
                        this.setState({ pass: e.target.value })
                    }} />
                <Button
                    style={{ marginTop: 10 }}
                    variant="outlined"
                    color="#E27F86"
                    onClick={() => {

                        /* Authenticate the user using entered credentials. */
                        Auth.authenticate(this.state.userName, this.state.pass, (user) => {

                            /* Authentication failed. */
                            if (!user) {
                                this.setState({ wrongCred: true })
                                return;
                            }

                            /* If we get here, authentication was success. */
                            this.props.dispatch(setLoggedInUser({ name: user.name }));
                            this.setState(() => ({
                                redirectToReferrer: true
                            }))

                        })
                    }}>Войти</Button>
                {this.state.wrongCred && <div style={{ color: "red" }}>Неправильное имя пользователя и/или пароль</div>}
            </div>
        );
    }
}
const Login = withRouter(connect()(ConnectedLogin));

export default Login;
