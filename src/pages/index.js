import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Profile from "../components/profile"

const IndexPage = () => (
  <Layout>
    <SEO title="jNode the CodeChain validator service" />

    <Profile
      name="JinGyeong Jeong"
      description=""
      image={
        <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      }
    />
  </Layout>
)

export default IndexPage
