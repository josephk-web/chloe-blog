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
      <h1 className="mb-4">{post.frontmatter.title}</h1>
      <img src={post.frontmatter.image} className="card-img-top mb-4 blog-post-img" alt="post-img"></img>
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
        image
      }
    }
  }
`