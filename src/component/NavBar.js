import React from 'react'
import { Nav, StyledLink } from '../styled-components'

export default function NavBar() {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/posts/new">Add a post</StyledLink>
    </Nav>
  )
}
