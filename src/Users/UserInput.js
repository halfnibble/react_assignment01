import React from 'react'
import './Users.css'


const UserInput = (props) => {
    return (
        <div className="userForm">
            <label className="label">
                Username:
            </label>
            <input 
                type="text"
                className="input"
                name="username"
                value={props.username}
                onChange={props.changed}
            />
        </div>
    )
}

export default UserInput