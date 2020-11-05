import React from "react";
import { graphql } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

// Components
import NavBar from '../components/NavBar';

export default function Home({ data }) {

  return (
   
    <div>
      <NavBar /> 
 
      <div className="hero">

      </div>
</div>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "chloeadams.jpg" }) {
      publicURL
    }
  }
  `