import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Pitch, Education, Experience, Contacts, Projects, Services, Certification } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Portfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Certification />
            <Services />
            <Testimonials />
            <Pitch />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
