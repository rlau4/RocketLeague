import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook =  response => {
        this.setState ({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    componentClicked = () => console.log("clicked");


    render()  {
        let fbConent;
        if(this.state.isLoggedIn) {
            fbConent= (
                <div>
                    <img src= {this.state.picture} alt={this.state.name}/>
                    <text>Signed In as {this.state.name}</text>
                </div>
            );
        } else {
            fbConent = (<FacebookLogin
                appId="2407121502708813"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);
        }
        return (
            <div>
                {fbConent}
            </div>
        )
    }
}