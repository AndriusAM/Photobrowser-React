import React from 'react'
import { StyledNavBar } from '../styles/NavBar.styled'

function NavBar() {
  return (
    <StyledNavBar>
      <div>
        <a href="https://andriusam.github.io/Photobrowser-React/">Photobrowser</a>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://andriusam.github.io/Photobrowser-React/">Home</a>
          </li>
          <li>
            <a href="https://andriusam.github.io/Photobrowser-React/">Albums</a>
          </li>
          <li>
            <a href="#bottom">Contacts</a>
          </li>
        </ul>
      </div>
    </StyledNavBar>
  )
}

export default NavBar