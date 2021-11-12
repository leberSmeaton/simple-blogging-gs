import React from 'react'
import { Nav, StyledFooterLink } from '../styled-components'

export default function NavBar() {
  return (
    <Nav>
      <StyledFooterLink to="www.facebook.com">Faceboook</StyledFooterLink>
      <StyledFooterLink to="www.medium.com">Medium</StyledFooterLink>
      <StyledFooterLink to="www.twitter.com">Twitter</StyledFooterLink>
    </Nav>
  )
}
