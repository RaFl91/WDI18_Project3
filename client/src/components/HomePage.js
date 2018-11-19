import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
//  ===== Home Styling =====
const HomePageStyles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Orbitron|Raleway');
  font-family: 'Raleway', sans-serif;
  display: flex;
  background: #34B2A4;
  justify-content: space-between;
  main{
    font-size: 20px;
    letter-spacing: 0.02em;
  }
  p{
    font-size: 20px;
    letter-spacing: 0.02em;
    align-self: flex-end;
  }
  button{
    align-items: right;
    font-size: 25px;
    font-style: italic;
    text-align: center;
    letter-spacing: 0.02em;
    background: #CC2E81;
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
        <main>For the authors, the table-top gamers, and the construstors in all of us.</main>
        <button>
          <Link to='/users/:userId'>Begin</Link>
        </button>
      </HomePageStyles>
    )
  }
}
