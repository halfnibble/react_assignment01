import React from 'react'

const styles = {
    username: {
        'paddingBottom': '3px',
        'borderBottom': '1px dashed #222'
    },
    highlight: {
        'backgroundColor': '#FFFF00',
        'color': '#000',
        'padding': '3px 6px',
        'display': 'inline-block'
    }   
}

const UserOuput = (props) => {

    return (
        <div className="outputCard">
            <p>
                <span style={styles.username}>{props.username}</span> is logged in.
            </p>
            <p style={styles.highlight}>
                {props.children}
            </p>
        </div>
    )
}

export default UserOuput