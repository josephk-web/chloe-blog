import React from 'react';
import { Link } from "gatsby"

export default function NavBar() {

    return (
             <nav className="navbar navbar-expand-lg navbar-light bg-light">

                 <div className="container">
                     <Link to="/" className="navbar-brand mr-auto">C. Adams</Link>

                <ul className="navbar-nav">
                   <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li> 
                   <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li> 
                </ul>
                 </div>
         
            </nav>
    )
}

