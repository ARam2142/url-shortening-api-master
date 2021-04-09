import React from 'react';
import Header from '../components/header/Header'
import BoostLinks from "../components/boostlinks/BoostLinks"
import Statistics from "../components/statistics/Statistics"
import Footer from '../components/footer/Footer';

function Home() {
    return (
        <div className="grid-container">
            <Header />
            <Statistics />
            <BoostLinks />
            <Footer />
        </div>
    )
}

export default Home;