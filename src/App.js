import React, {Component, Fragment} from 'react';
import axios from 'axios'

import './App.css';
import Layout from "./Components/Layout/Layout";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Profile from "./Components/Profile/Profile";

class App extends Component {

    instance = null;

    state = {
        loggedIn: false,
        access_token: null,
        userData: null
    };

    onSignIn = (error, data) => {

        if (data) {
            this.setState(
                {
                    loggedIn: true,
                    access_token: data.access_token,
                }
            );
            const AuthStr = `Bearer ${data.access_token}`;
            axios.get('https://livechat-rest-api.glitch.me/agents', {headers: {Authorization: AuthStr}})
                .then((response) => {
                    this.setState({
                        userData: response.data[0]

                    })
                });


        }
    };

    onSignOut = (e) => {
        e.preventDefault();
        this.setState({
            loggedIn: false
        });
        this.instance.signOut(() => {
            this.instance.displayButtons();
            console.log('User signed out');
        });
    };

    componentWillMount() {
        this.instance = window.AccountsSDK.init({
            client_id: '7e142888fd0dbb9580ae5902afb92086',
            onIdentityFetched: this.onSignIn
        });
    };

    render() {
        console.log(this.state.access_token);
        return (

            <Fragment>
                <WelcomePage loggIn={this.state.loggedIn}
                             logOutHandler={this.onSignOut}/>
                {this.state.userData && <Profile userInfo={this.state.userData} loggin={this.state.loggedIn} /> }
            </Fragment>

        );
    }
}

export default App;
