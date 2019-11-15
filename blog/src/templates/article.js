import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticles.title}</h1>
    <p>
      by{" "}
      <Link to={`/authors/Users_${data.strapiArticles.user.id}`}>
        {data.strapiArticles.user.username}
      </Link>
    </p>
    {data.strapiArticles.banner && (
      <Img fluid={data.strapiArticles.banner.childImageSharp.fluid} />
    )}
    <p>{data.strapiArticles.content}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticles(id: { eq: $id }) {
      title
      content
      banner {
        childImageSharp {
          fluid(maxWidth: 960) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
      user {
        id
        username
      }
    }
  }
`
