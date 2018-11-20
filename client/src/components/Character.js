import React, { Component } from 'react'

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
    
  }

  render() {
    return (
      <div>
        <h1>Hello from CharacterComponent</h1>
      </div>
    )
  }
}
