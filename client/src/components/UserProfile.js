import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
                {this.state.characters.map((character) => (
                    <div >
                        <Link to={`/character/${character._id}`}>{character.name}</Link>
                    </div>
                ))}
            </div>
        )
    }
}
