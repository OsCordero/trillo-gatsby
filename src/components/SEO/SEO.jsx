import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        siteTitle: title
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: { siteDescription, siteTitle, author },
    },
  } = useStaticQuery(query)

  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={description || siteDescription} />
      <meta name="author" content={author} />
    </Helmet>
  )
}

export default SEO
