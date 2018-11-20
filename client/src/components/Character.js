import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Character extends Component {

  state = {
    character: [],
    newCharc: {
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
        {this.state.character.map((character) => (
          <div>
            <Link to={`/character/${character._id}`}>{character.name}</Link>
          </div>
        ))}
      </div>
    )
  }
}
