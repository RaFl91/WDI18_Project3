import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


//  ===== Styling =====
const NavBarStyles = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Orbitron|Raleway');
    display: flex;
    justify-content: flex-end;
    padding: 50px 70px 20px 0px;
    align-items: right;
    background: #242D42;
    height: 10vh;
    font-size: 70px;
    font-family: 'Orbitron', sans-serif;
    a {
        text-decoration: none;
        color: #241959;
        &:hover{
           color: #E6ED96; 
        }
    }
    
`
export default class NavBar extends Component {
    render() {
        return (
            <NavBarStyles>
                    <Link to="/">Constructor</Link>
            </NavBarStyles>
        )
    }
}
