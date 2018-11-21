import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Character extends Component {

  state = {
    character: [],
    newCharacter: {
      name: '',
      age: '',
      gender: '',
      heightinfeet: '',
      heightininches: '',
      race: '',
      weapon: '',
      group: '',
      subgroup: ''
    }
  }

  getAllCharacters = () => {
    const userId = this.props.match.params.userId
    axios.get(`/api/users/${userId}/characters`).then(res => {
      this.setState({
        character: res.data.character
      })
    })
  }

  componentDidMount() {
    this.getAllCharacters()
  }

  render() {
    return (
      <div>
        {this.state.user.characters.map((character) => (
          <div>
            <Link to={`/character/${character._id}`}>{character.name} </Link>
          </div>
        ))}
      </div>
    )
  }
}
