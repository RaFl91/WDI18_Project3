import React, { Component } from 'react'
import axios from 'axios'


export default class UserProfile extends Component {
    state = {
        user: {},
        characters: []
    }

    getAllCharacters = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then(res => {
            this.setState({
                user: res.data,
                characters: res.data.characters
            })
        })
    }

    componentDidMount() {
        this.getAllCharacters()
    }

    render() {
        return (
            <div>
                {/* {this.state.characters.map(character => (
                    <UserProfile getAllCharacters={this.getAllCharacters} key={character._id} character={character}/>
                ))} */}
            </div>
        )
    }
}
