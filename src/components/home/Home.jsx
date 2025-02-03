import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Profile from '../../assets/profile.jpg'

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Profile} alt="" className='home__img' width='120' />
                <h1 className="home__name">Ramesh Babu Kalla</h1>
                <span className="home__education">I'm a Software Engineer</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home