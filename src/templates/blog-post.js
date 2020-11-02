import React from "react"
import { graphql } from "gatsby"

// Components
import Navbar from "../components/NavBar";

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (

    <div>

      <Navbar />

      <div className="container">
      <h1>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
    </div>
    
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) { 
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`