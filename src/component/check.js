import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class check extends Component {

    render() {
        return (
            <div>
                <h1>Your account was created Successfully. <Link to='/login'>Click here</Link> to login your account</h1>
            </div>
        )
    }
}

export default check
