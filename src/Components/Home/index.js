import './index.css'
import { Fade, Zoom } from "react-awesome-reveal"
import avathar from '../../assets/Animated-avathar.png'
import Skills from '../Skills'
import { skills } from '../../assets/data'
import Project from '../Project'
import Certificate from '../Certificate'
import Resume from '../../assets/resume.pdf';
import githubIcon from "../../assets/github.png";
import mailIcon from "../../assets/mail.png";

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
                <button className='about-resume-button'>
                    <a href={Resume} download="Madhu's Resume">Download Resume</a>
                </button>
            </Fade>
        </section>

        <section className='each-section' id='skills'>
            <p className='section-title'>{'<My Skills />'}</p>
            <div className="skill-list">
                <Zoom cascade >
                    <Skills title="Frontend" skills={skills.frontend} />
                    <Skills title="Backend" skills={skills.backend} />
                    <Skills title="Other" skills={skills.other} />
                </Zoom>

            </div>
        </section>

        <section className='each-section' id='projects'>
            <p className='section-title'>{'<Projects />'}</p>

            <div className='projects-list'>
                <Project title="Nxt Watch - Online video streaming application" logo="ProjectNxtwatch" github="https://github.com/Dev-Madhu-3/Nxt-Watch" live="https://dev-madhu-3.github.io/Nxt-Watch" techs="React.js, Routing, REST API Calls, CSS, Bootstrap" desc="Developed a video streaming platform allowing users to watch videos, save videos to a
watch later list, and search for specific content." />
                <Project title="Nxt Watch - Online video streaming application" logo="ProjectNxtwatch" github="https://github.com/Dev-Madhu-3/Nxt-Watch" live="https://dev-madhu-3.github.io/Nxt-Watch" techs="React.js, Routing, REST API Calls, CSS, Bootstrap" desc="Developed a video streaming platform allowing users to watch videos, save videos to a
watch later list, and search for specific content." direction='left' />
                <Project title="Nxt Watch - Online video streaming application" logo="ProjectNxtwatch" github="https://github.com/Dev-Madhu-3/Nxt-Watch" live="https://dev-madhu-3.github.io/Nxt-Watch" techs="React.js, Routing, REST API Calls, CSS, Bootstrap" desc="Developed a video streaming platform allowing users to watch videos, save videos to a
watch later list, and search for specific content." />
                <Project title="Nxt Watch - Online video streaming application" logo="ProjectNxtwatch" github="https://github.com/Dev-Madhu-3/Nxt-Watch" live="https://dev-madhu-3.github.io/Nxt-Watch" techs="React.js, Routing, REST API Calls, CSS, Bootstrap" desc="Developed a video streaming platform allowing users to watch videos, save videos to a
watch later list, and search for specific content." direction='left' />
                <Project title="Nxt Watch - Online video streaming application" logo="ProjectNxtwatch" github="https://github.com/Dev-Madhu-3/Nxt-Watch" live="https://dev-madhu-3.github.io/Nxt-Watch" techs="React.js, Routing, REST API Calls, CSS, Bootstrap" desc="Developed a video streaming platform allowing users to watch videos, save videos to a
watch later list, and search for specific content." />

            </div>

        </section>

        <section className='each-section' id='certifications'>
            <p className='section-title'>{'<Certificatons />'}</p>
            <div className='Certificates-list'>
                <Fade cascade damping={0.2}>
                    <Certificate title='NxtWave: ReactJs Course Completion' imgUrl='certificateReact' num='01' />
                    <Certificate title='NxtWave: ReactJs Course Completion' imgUrl='certificateReact' num='02' />
                    <Certificate title='NxtWave: ReactJs Course Completion' imgUrl='certificateReact' num='03' />
                    <Certificate title='NxtWave: ReactJs Course Completion' imgUrl='certificateReact' num='04' />
                    <Certificate title='NxtWave: ReactJs Course Completion' imgUrl='certificateReact' num='05' />
                </Fade>
            </div>
        </section>
        <section className='each-section' id='Contact'>
            <p className='section-title'>{'<Contact Me />'}</p>
            <div className="contact-me">
                <div className="contact-content">
                    <div className="cnt-bx1">
                        <div className="cnt-title">Lets Connect...</div>
                        <div className="cnt-desc">
                            Feel free to reach out—I'm just a click away to connect and collaborate !
                        </div>
                        <div className="cnt-btns">
                            <a href="mailto:madhustudent4@gmail.com" className="mail-btn">
                                <div className="">Get in Touch...</div>
                                <img src={mailIcon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contacts">
                    <div className="cnt-bx2">
                        <div onClick={() => {
                            navigator.clipboard.writeText
                                ("9989857197");
                            alert("Contact Number Copied")
                        }} className="cnt-info">
                            <span className="cnt-icon">+91</span>
                            <div className="cnt">9989857197</div>
                        </div>
                        <a href="https://www.linkedin.com/in/madhu-uppala" target="_blank" className="cnt-info" rel="noreferrer">
                            <span className="cnt-icon">in</span>
                            <div className="cnt">Linkedin Profile</div>
                        </a>
                        <a href="https://github.com/dev-madhu-3/" target="_blank" className="cnt-info" rel="noreferrer">
                            <span className="cnt-icon">
                                <img src={githubIcon} alt="" />
                            </span>
                            <div className="cnt">Github Profile</div>
                        </a>
                    </div>
                </div>

            </div>
        </section>

    </div>

)

export default Home