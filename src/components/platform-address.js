import React from "react"
import styled from "styled-components"

const Monospace = styled.span`
  font-family: monospace;
`

const PlatformAddress = ({ address }) => (
  <a href={`https://explorer.codechain.io/addr-platform/${address}`}>
    <Monospace>{address}</Monospace>
  </a>
)

export default PlatformAddress
