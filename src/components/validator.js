import React from "react"

import PlatformAddress from "./platform-address"

const address = "cccqy6qzunhrdq8trsv299kjhnyljq0j2jcmqkhsftc"

const Validator = () => (
  <>
    <div>
      address: <PlatformAddress address={address} />
    </div>
    <div>Node Settings: ...</div>
    <div>ccstake delegate --delegatee {address}</div>
  </>
)

export default Validator
