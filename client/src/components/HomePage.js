import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
//  ===== Home Styling =====
const HomePageStyles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Orbitron|Raleway');
  font-family: 'Raleway', sans-serif;
  
  button{
    font-size: 25px;
  font-style: italic;
  text-align: center;
  letter-spacing: 0.02em;
  background: #34B2A4;
  padding: 15px 40px;
  border: 3px solid #E6ED96;
  border-radius: 50px;
  a {
    text-decoration: none;
    color: #241959;
    &:hover{
      color: #EDE696;
    }
  }
}
  
`
export default class HomePage extends Component {
  render() {
    return (
      <HomePageStyles>
        <p> The Character Creator</p>
        <aside>For the authors, the table-top gamers, and the construstors in all of us.</aside>
        <button>
          <Link to='/users/:userId'>Begin</Link>
        </button>
      </HomePageStyles>
    )
  }
}
