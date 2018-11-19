import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


//  ===== Styling =====
const NavBarStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: right;
    background: #242D42;
    height: 15vh;
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
