import React from "react"
import styled from "styled-components"

import PlatformAddress from "./platform-address"

const Lato = styled.div`
  font-family: Lato;
`

const Monospace = styled.div`
  font-family: monospace;
`

const ActiveColor = styled.span`
  color: #05aad1;
  font-weight: bold;
`

const address = "cccqy6qzunhrdq8trsv299kjhnyljq0j2jcmqkhsftc"

const Validator = () => (
  <Lato>
    <h2>Mainnet</h2>
    <table>
      <tr>
        <td>Status</td>
        <td>
          <ActiveColor>Running</ActiveColor>
        </td>
      </tr>
      <tr>
        <td>Address</td>
        <td>
          <PlatformAddress address={address} />
        </td>
      </tr>
    </table>
    <Monospace>
      <center>ccstake delegate --delegatee {address}</center>
    </Monospace>
  </Lato>
)

export default Validator
