import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    
    return(
        <div className="mb-5">
        <h1 className="text-center mb-0">John Hauth</h1>
        <h3 className="text-center mb-0">Full-Stack</h3>
        <h3 className="text-center">Software Developer</h3>
        <div className="d-flex flex-row justify-content-center">
            <Link to="/">
            <button className="mx-2">Home</button>
            </Link>
            <Link to="/aboutme">
            <button className="mx-2">About Me</button>
            </Link>
            <Link to="/skills">
            <button className="mx-2">Skills</button>
            </Link>
            <Link to="/projects">
            <button className="mx-2">Projects</button>
            </Link>
        </div>
        </div>
    )
}

export default Header;