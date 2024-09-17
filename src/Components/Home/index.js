import './index.css'
import { Fade } from "react-awesome-reveal"
import avathar from '../../assets/Animated-avathar.png'
import Skills from '../Skills'
import { skills } from '../../assets/data'

const Home = () => (
    <div className='home-container'>
        <section id='intro'>
            <div className="left-section">
                <h1>
                    <div className="intro-greeting">Hii There,  I'm</div>
                    <Fade cascade className="intro-my-name">Madhu</Fade>
                </h1>
                <div className="intro-desig"><span className="intro-desig-span">MERN</span> STACK DEVELOPER</div>
                <div className="intro-desig-skills">
                    <span className="intro-skl">Mongo DB</span>
                    <span className="intro-skl">Express Js</span>
                    <span className="intro-skl">React Js</span>
                    <span className="intro-skl">Node Js</span>
                </div>

            </div>
            <div className='right-section'>
                <img className='intro-avathar' src={avathar} alt='avathar' />
            </div>
        </section>

        <section id='about'>
            <Fade cascade damping={0.2} >
                <p className='section-title'>{'<About Me />'}</p>
                <p className='about-discription'>👋Hi, I'm Madhu Uppala, a passionate Fullstack Developer with growing expertise in web development. With hands-on experience in ReactJS and NodeJS, I’ve had the opportunity to build dynamic applications like an e-commerce platform and a video streaming service.
                </p>

                <p className='about-discription'>💻 As a MERN Stack Developer, I focus on creating responsive, user-centric web applications using React, Node.js, Express, and MongoDB. My passion lies in solving real-world problems through technology, and I’m always eager to take on new challenges.
                </p>

                <p className='about-discription'>🌐 Some of the projects I’ve built include Nxt Trendz and Nxt Watch, and I’m constantly expanding my knowledge to stay ahead of the curve. I’m currently seeking opportunities to further leverage my skills in both front-end and back-end development to create impactful digital solutions.
                </p>
                <button className='about-resume-button'>Download Resume</button>
            </Fade>
        </section>

        <section id='about'>
            <p className='section-title'>{'< My Skills />'}</p>
            <div className="skill-list">
                <Skills title="Frontend" skills={skills.frontend} />
                <Skills title="Backend" skills={skills.backend} />
                <Skills title="Other" skills={skills.other} />
            </div>
        </section>

    </div>

)

export default Home