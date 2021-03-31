import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import StudentsSection from '../StudentsSection'
import Footer from '../Footer'
import HeroSection from '../HeroSection'

function Home() {
    return (
        <>
            <HeroSection />
            <StudentsSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;