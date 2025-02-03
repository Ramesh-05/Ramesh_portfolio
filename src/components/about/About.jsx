import React from 'react';
import './About.css';
import Image from '../../assets/profile.jpg';
import Resume from '../../assets/Ramesh_New_Resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hi, I'm Ramesh, a passionate Fullstack Developer based in Hyderabad, India. With expertise in both frontend and backend technologies, I specialize in building scalable and efficient applications. I have a deep understanding of Java, Spring Boot, Angular, React, and AWS, and I enjoy working on microservices-based systems. <br /><br />
                            I thrive in collaborative environments and love problem-solving with clean, efficient code. My goal is to continue growing as a software engineer, contributing to innovative projects, and delivering high-performance solutions.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>Java (Spring Boot, J2EE)</li>
                            <li>Angular</li>
                            <li>React</li>
                            <li>Microservices</li>
                            <li>AWS</li>
                            <li>SQL Server</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About