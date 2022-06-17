import React from 'react'
import { StyledNavBar } from '../styles/NavBar.styled'

function NavBar() {
  return (
    <StyledNavBar>
      <div>
        <a href="/">Photobrowser</a>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Albums</a>
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