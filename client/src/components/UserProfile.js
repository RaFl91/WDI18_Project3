import React, { Component } from 'react'
import axios from 'axios'
import Character from './Character';


export default class UserProfile extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then(res => {
            this.setState({
                user: res.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.user.img} <br/>
                <h1>{this.state.user.username}</h1> <br/>
                {/* <Character /> */}
            </div>
        )
    }
}
