import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import UserSignUp from './UserSignUp';

export default class User extends Component {
    state = {
        users: []
    }

    getAllUsers = () => {
        axios.get('/api/users').then((res) => {
            this.setState({ users: res.data })
        })
    }

    componentDidMount() {
        this.getAllUsers()
    }
    render() {
        return (
            <div>
                {this.state.users.map((user) => (
                    <div key={user._id}>
                        <Link to={`/users/${user._id}`}>{user.username}</Link>
                    </div>
                ))}
                <UserSignUp history={this.props.history} />
            </div>
        )
    }
}
