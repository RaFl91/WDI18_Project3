import React, { Component } from 'react'

export default class Character extends Component {

  state ={
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

  componentDidMount() {
    const initialState = {
      characterId: this.props.character._id,
      age: this.props.character.age,
      gender: this.props.character.gender,
      heightinfeet: this.props.character.heightinfeet,
      heightininches: this.props.character.heightininches,
      race: this.props.character.race,
      weapon: this.props.character.weapon,
      group: this.props.character.group,
      subgroup: this.props.character.subgroup
    }
    this.setState(initialState)
  }

  render() {
    return (
      <div>
        <h1>Hello from CharacterComponent</h1>
      </div>
    )
  }
}
