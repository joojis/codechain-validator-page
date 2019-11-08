import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile-joojis"
import Validator from "../components/validator"

const IndexPage = () => (
  <Layout>
    <SEO title="jNode the CodeChain validator service" />
    <Validator />
    <div style={{ height: 200 }}></div>
    <Profile />
    <div style={{ height: 200 }}></div>
    <hr />
  </Layout>
)

export default IndexPage
