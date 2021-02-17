import React from 'react';
import picture from "../utils/oldschool.png"
import {motion} from 'framer-motion'
//ABOUT ME SECTION

const Name = () => {
const pageTransition = {
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opactity: 0,
        x: "-100vh"
    }
}

const headerstyle = {
    fontSize: "75"
}

return (
<motion.div initial="out" animate="in" exit="out" variants={pageTransition} className="namediv d-flex flex-column flex-wrap align-items-center justify-content-center mt-3 p-2">
<h1 style={headerstyle} className="text-center sectionheader skillshead">About Me</h1>
    <div className="d-flex flex-row flex-wrap align-items-center justify-content-center p-2">
    <img className="img-fluid img-thumbnail px-3 py-3" src={picture} alt="responsive"></img>
    <div className="aboutmedescription d-flex flex-column">
    <p className="text-justify px-3 mt-3">I am a MERN (Mongo, Express, React, Node) developer with strong business management experience and want to build an application with YOU. Working in hospitality for the past several years has allowed me to build strong relationships with clients and provide an infinite drive for success. I have always surrounded myself with technology and coding for as long as I can remember. I have held positions such as "General Manager", "Director of Operations", and "Food Saftey Instructor". These positions have given me the tools to work, lead, and teach peers from all different backgrounds and skill sets. In my free time I enjoy making my own hot sauce, playing fantasy football, and reading any Batman comic I can! I enjoy meeting new people and exploring any new Mexican restaurant. Feel free to reach out and lets build something together!</p>
    </div>
    </div>
</motion.div>

 )}

export default Name;