import React from 'react'
import './homeScss/home.css';
import MiniNav from '../mininav/MiniNav';
import Nav from '../nav/Nav';
import HomeContent from '../content/HomeContent';

function Home() {
    return (
        <div className="home">
        <MiniNav />
        <Nav />
        <HomeContent />
        </div>
    )
}

export default Home
