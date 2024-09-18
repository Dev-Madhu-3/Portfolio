import './index.css'
import { Fade } from "react-awesome-reveal"
import avathar from '../../assets/Animated-avathar.png'
import Skills from '../Skills'
import { skills } from '../../assets/data'
import Project from '../Project'
import Certificate from '../Certificate'

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

        <section className='each-section' id='about'>
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

        <section className='each-section' id='skills'>
            <p className='section-title'>{'<My Skills />'}</p>
            <div className="skill-list">
                <Skills title="Frontend" skills={skills.frontend} />
                <Skills title="Backend" skills={skills.backend} />
                <Skills title="Other" skills={skills.other} />
            </div>
        </section>

        <section className='each-section' id='projects'>
            <p className='section-title'>{'<Projects />'}</p>

            <div className='projects-list'>
                <Project title="Student Leave Management System" logo="slmsProj" github="https://github.com/VishankWagh/SLMS" live="https://student-leave-management-system.netlify.app" techs="ReactJs, NodeJs, ExpressJs, MongoDb" desc="Built an online platform to tackle a real world problem by managing student’s leaves on the SLMS system, which was assigned to me as an intern at Navpad Infotech." />
                <Project title="Student Leave Management System" logo="slmsProj" github="https://github.com/VishankWagh/SLMS" live="https://student-leave-management-system.netlify.app" techs="ReactJs, NodeJs, ExpressJs, MongoDb" desc="Built an online platform to tackle a real world problem by managing student’s leaves on the SLMS system, which was assigned to me as an intern at Navpad Infotech." direction='left' />
                <Project title="Student Leave Management System" logo="slmsProj" github="https://github.com/VishankWagh/SLMS" live="https://student-leave-management-system.netlify.app" techs="ReactJs, NodeJs, ExpressJs, MongoDb" desc="Built an online platform to tackle a real world problem by managing student’s leaves on the SLMS system, which was assigned to me as an intern at Navpad Infotech." />
                <Project title="Student Leave Management System" logo="slmsProj" github="https://github.com/VishankWagh/SLMS" live="https://student-leave-management-system.netlify.app" techs="ReactJs, NodeJs, ExpressJs, MongoDb" desc="Built an online platform to tackle a real world problem by managing student’s leaves on the SLMS system, which was assigned to me as an intern at Navpad Infotech." direction='left' />
                <Project title="Student Leave Management System" logo="slmsProj" github="https://github.com/VishankWagh/SLMS" live="https://student-leave-management-system.netlify.app" techs="ReactJs, NodeJs, ExpressJs, MongoDb" desc="Built an online platform to tackle a real world problem by managing student’s leaves on the SLMS system, which was assigned to me as an intern at Navpad Infotech." />

            </div>

        </section>

        <section className='each-section' id='certifications'>
            <p className='section-title'>{'<Certificatons />'}</p>
            <div className='Certificates-list'>
                <Fade cascade damping={0.2}>
                    <Certificate title='Scaler: SOLID Principles every developer must know' imgUrl='crtisolid' num='01' />
                    <Certificate title='Scaler: SOLID Principles every developer must know' imgUrl='crtisolid' num='02' />
                    <Certificate title='Scaler: SOLID Principles every developer must know' imgUrl='crtisolid' num='03' />
                    <Certificate title='Scaler: SOLID Principles every developer must know' imgUrl='crtisolid' num='04' />
                    <Certificate title='Scaler: SOLID Principles every developer must know' imgUrl='crtisolid' num='05' />
                </Fade>
            </div>
        </section>

        <section className='each-section' id='Contact'>
            <p className='section-title'>{'<Contact Me />'}</p>
            <div className='contact-me'>

            </div>
        </section>

    </div>

)

export default Home