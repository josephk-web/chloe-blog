import React from "react";
import { graphql, Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

// Components
import NavBar from '../components/NavBar';

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  const { posts } = data.blog

  return (
   
    <div>
      <NavBar />

       <div className="container hero mb-5 d-flex align-items-center">
         <div className="row d-flex justify-content-center align-items-center">

           <div className="col-md-6">
             <img className="chloe-img" alt="chloeadams" src={data.image.publicURL} />
           </div>

                    <div className="col-md-6">
    <h1 className="text-bold text-dark">{title}</h1>
      <h3>{description}</h3>
           </div> 
         </div>
      
    </div>

    <div className="container d-flex justify-content-around flex-wrap">
    {posts.slice(0,3).map(post => (
        <div className="card" key={post.id}>
          <div className="card-body">
          <h5 className="card-title text-dark">{post.frontmatter.title}</h5>
             <small >
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p className="card-text">{post.excerpt}</p>
          <Link className="card-link text-dark btn btn-outline-dark" to={post.fields.slug}>Read more</Link>
          </div>
         
        </div>
      ))}

    </div>
    </div>
   
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }

    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }

    image: file(base: { eq: "chloeadams.png" }) {
      publicURL
    }
  }
`
