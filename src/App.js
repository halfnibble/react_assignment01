import React, { Component } from 'react'
import UserInput from './Users/UserInput'
import UserOutput from './Users/UserOutput'
import './App.css'

class App extends Component {
    state = {
        username: 'johnsmith'
    }

    usernameChangedHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <UserInput username={this.state.username} changed={this.usernameChangedHandler} />
                <UserOutput username={this.state.username}>
                    Is totally awesome!
                </UserOutput>
                <UserOutput username={this.state.username}>
                    Is filled with jelly.
                </UserOutput>
                <UserOutput username={this.state.username}>
                    Loves to code!
                </UserOutput>
            </div>
        )
    }
}

export default App
