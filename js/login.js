import React, { Component } from "react";
import { LoginButton, AccessToken } from "react-native-fbsdk";


// Define Login Button Component
export class Login extends Component {
  render() {
    return (
        <LoginButton

            // When logging in 
            onLoginFinished={(error, result) => {
            if (error) {
                console.log("login has error: " + result.error);
            } else if (result.isCancelled) {
                console.log("login is cancelled.");
            } else {
                AccessToken.getCurrentAccessToken().then(data => {
                console.log(data.accessToken.toString());
                });
            }
            }}

            // When logging out
            onLogoutFinished={() => console.log("logout.")}
        />
    )
  }
}