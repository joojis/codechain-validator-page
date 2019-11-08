import React from "react"
import styled from "styled-components"

const Monospace = styled.span`
  font-family: monospace;
`

const AddressLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: unset;
  }
  text-decoration: none;
`

const PlatformAddress = ({ address }) => (
  <AddressLink href={`https://explorer.codechain.io/addr-platform/${address}`}>
    <Monospace>{address}</Monospace>
  </AddressLink>
)

export default PlatformAddress
