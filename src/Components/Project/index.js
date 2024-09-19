import React from 'react'
import ProjectNxtwatch from "../../assets/project-nxtwatch.png";
import { Fade, Bounce } from "react-awesome-reveal"
import { LuExternalLink } from "react-icons/lu";

import './index.css'

const hrefs = {
    ProjectNxtwatch,
}

const isMobile = window.innerWidth <= 768;



const Project = ({ title, logo, desc, github, live, techs, direction }) => {

    const renderMobileView = () => (
        <Bounce>
            <div className={direction === 'left' ? 'project right-border' : 'project'}>
                <div className="proj-img-con">
                    <img src={hrefs[logo]} alt="" />
                </div>

                <div className="proj-content">
                    <div className="proj-title">{title}</div>
                    <div className="proj-desc">
                        <p>
                            {desc}
                        </p>

                    </div>
                    <div>{live && <button className="proj-btn">
                        <a href={live} target="_blank" rel="noreferrer">
                            View Live <LuExternalLink />
                        </a>
                    </button>}
                        {github && <button className="proj-btn proj-btn-type">
                            <a href={github} target="_blank" rel="noreferrer">
                                Github link <LuExternalLink />
                            </a>
                        </button>}</div>

                    <div className="proj-lang">
                        <b>Technologies</b> : {techs}
                    </div>
                </div>


            </div>
        </Bounce>

    )

    return (
        <>{isMobile ? <>{renderMobileView()}</> : <div className="project">
            <Fade direction={direction === 'left' ? 'left' : 'right'} duration={1000}  >
                <div className="proj-img-con">
                    <img src={hrefs[logo]} alt="" />
                </div>
            </Fade>

            <Fade cascade duration={1000} >
                <div className="proj-content">
                    <Fade cascade damping={0.1}>
                        <div className="proj-title">{title}</div>
                        <div className="proj-desc">
                            <p>
                                {desc}
                            </p>

                        </div>
                        <div>{live && <button className="proj-btn">
                            <a href={live} target="_blank" rel="noreferrer">
                                View Live <LuExternalLink />
                            </a>
                        </button>}
                            {github && <button className="proj-btn proj-btn-type">
                                <a href={github} target="_blank" rel="noreferrer">
                                    Github link <LuExternalLink />
                                </a>
                            </button>}</div>

                        <div className="proj-lang">
                            <b>Technologies</b> : {techs}
                        </div>
                    </Fade>
                </div>
            </Fade>


        </div>}</>

    )
}

export default Project