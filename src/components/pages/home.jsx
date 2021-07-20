import React from 'react';
import '../../App.css';
import HeroSection from '../heroSection';
import Cards from '../cards';
import Footer from '../footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home