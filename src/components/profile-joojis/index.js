import React from "react"
import styled from "styled-components"

import Image from "./image"

const ImageWrapper = styled.div`
  width: 220px;
  height: 220px;
`

const Lato = styled.div`
  font-family: Lato;
`

const Name = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`

const RowSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const GitHubLink = styled.a`
  &:hover {
    color: #666;
  }
  color: #333;
  font-family: sans-serif;
  font-weight: bold;
  text-decoration: none;
`

const TwitterLink = styled.a`
  &:hover {
    color: #58c1ff;
  }
  color: #38a1f3;
  font-family: Helvetica;
  font-weight: bold;
  text-decoration: none;
`

const MediumLink = styled.a`
  &:hover {
    color: #333;
  }
  color: black;
  font-family: serif;
  font-weight: bold;
  text-decoration: none;
`

const Profile = () => {
  const name = "JinGyeong Jeong"
  const description = "JinGyeong Jeong is a core developer of CodeChain"
  const githubLink = "https://github.com/joojis/"
  const twitterLink = "https://twitter.com/jjgjoojis"
  const mediumLink = "https://medium.com/@jjgjoojis"
  return (
    <RowSpaceBetween>
      <Lato>
        <Name>{name}</Name>
        <p style={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}>
          {description}
        </p>
        <GitHubLink href={githubLink}>GitHub</GitHubLink>
        <br />
        <TwitterLink href={twitterLink}>Twitter</TwitterLink>
        <br />
        <MediumLink href={mediumLink}>Medium</MediumLink>
      </Lato>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
    </RowSpaceBetween>
  )
}

export default Profile
