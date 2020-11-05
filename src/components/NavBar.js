import React from 'react';
import { Link } from "gatsby"
import { IoIosRose } from 'react-icons/io';


export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg pt-5 pb-5 d-flex flex-column justify-content-center align-items-center">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <Link to="/" className="nav-brand">Chloe Rose Adam's <IoIosRose /></Link>

                <ul className="navbar-nav collapse navbar-collapse" id="navbarSupportedContent">
                    <li className="nav-item"><Link to="/" className="nav-link mr-4">Home</Link></li>
                    <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                </ul>
            </div>


        </nav>
    )
}

