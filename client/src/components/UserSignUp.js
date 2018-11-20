import React, { Component } from 'react'
import axios from 'axios'

export default class UserSignUp extends Component {
    state = {
        username: '',
        img: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/users', this.state).then(res => {
            console.log(res.data)
            this.props.history.push(`/users/${res.data._id}`)
        })
    }
   render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="username">User Name: </label>
                <input onChange={this.handleChange} value={this.state.username} type="text" name="username"/>
            </div>
            <div>
                <label htmlFor="img">Image: </label>
                <input onChange={this.handleChange} value={this.state.img} type="text" name="img"/>
            </div>
            <button type="submit">Create User</button>
        </form>
      </div>
    )
  }
}
