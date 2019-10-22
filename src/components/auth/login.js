import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import APIManager from "../../modules/APIManager";

class Login extends Component {
  // Set initial state
  state = {
    email: "",
    password: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    let credentials = { email: this.state.email, password: this.state.password }
    APIManager.searchUsername(this.state.email)
      .then(result => {
        console.log("what is the result of search", result)
        // the result returns an array of users
        if (result.length > 0) {
          this.props.setUser(result[0])
          this.props.history.push("/order")
        } else {
          APIManager.addUser(credentials).then(result => {
            console.log("result is", result)
            this.props.setUser(result)
          })
          this.props.history.push("/order");
        }
            
      })
    // APIManager.addUser(credentials)
    // .then(result => {
    //   console.log("result is", result);
    //   this.props.setUser(result);
    // })
    // this.props.history.push("/");

  }

  render() {
    return (
    <>
    </>
     )
  }
}

export default withRouter(Login);