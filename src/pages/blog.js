import React from "react"
import { graphql, Link } from "gatsby"

// Components
import NavBar from '../components/NavBar';

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <div>

    <NavBar />

      <div className="container">
      <h1 className="mb-5 mt-5">Blog posts</h1>

      <div className="flex-wrap card-columns">
              {posts.map(post => (
        <article className="card mb-5" key={post.id}>
          <img src={post.frontmatter.image} className="card-img-top" alt="post-img"></img>
          <div className="card-body">
          
            <h3 className="card-title">{post.frontmatter.title}</h3>
             
          <small className="card-text">
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
          <Link className="btn btn-dark" to={post.fields.slug}>Read more</Link>
          </div>
         
        </article>
      ))}
      </div>


    </div>   
      </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
          image
        }
        excerpt
        id
      }
    }
  }
`