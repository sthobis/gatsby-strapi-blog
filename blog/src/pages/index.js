import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {data.allStrapiArticles.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <p>
            {document.node.content.substring(0, 250)}
            {document.node.content.length > 250 && "..."}
          </p>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query IndexQuery {
    allStrapiArticles(sort: { fields: created_at, order: DESC }) {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`

export default IndexPage
