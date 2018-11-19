import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Constructor</Link>
      </div>
    )
  }
}
