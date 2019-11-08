import React from "react"

const PlatformAddress = ({ address }) => (
  <a href={`https://explorer.codechain.io/addr-platform/${address}`}>
    {address}
  </a>
)

export default PlatformAddress
