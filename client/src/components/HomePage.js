import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Hello from HomePageComponent</h1>
        <button>
          <Link to='/users/:userId'>Begin</Link>
        </button>
      </div>
    )
  }
}
