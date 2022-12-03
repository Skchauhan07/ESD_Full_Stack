import React from 'react'
import { Link } from 'react-router-dom'

export default function NavHead() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="iiitb.png" width="80" height="70" class="d-inline-block align-top" alt=""></img>
                    </a>
                {/* <Link to="/home" class="navbar-brand">Online Course</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <p class="font-weight-bold"><Link class="nav-link" to="/home">Home </Link></p>
                            {/* <Link class="nav-link" to="/home">Home </Link> */}
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
