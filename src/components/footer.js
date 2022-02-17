import React from 'react';
import resume from "../utils/Resume.pdf"

const Footer = () => {

    const dividerstyle = {
        fontSize: "20px"
    }
    const footerstyle = {
        marginTop: "50px"
    }
    return(
        <div style={footerstyle} className="footer">
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <button>
        <a className="px-2 mx-2" href={resume} download>Resume</a>
        </button>
        <p style={dividerstyle} className="mb-0">|</p>
        <button>
        <a className="px-2 mx-2" href="mailto:jkhauth@gmail.com">Email</a>
        </button>
        <p style={dividerstyle} className="mb-0">|</p>
        <button>
        <a className="px-2 mx-2" href="https://github.com/jkhauth">GitHub</a>
        </button>
        <p style={dividerstyle} className="mb-0">|</p>
        <button>
        <a className="px-2 mx-2" href="https://www.linkedin.com/in/john-k-hauth/">LinkedIn</a>
        </button>
        </div>
        </div>
    )
}

export default Footer;