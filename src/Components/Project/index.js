import React from 'react'
import slmsProj from "../../assets/proj_slms.png";
import { Fade, Bounce } from "react-awesome-reveal"
import { LuExternalLink } from "react-icons/lu";

import './index.css'

const hrefs = {
    slmsProj,
}

const isMobile = window.innerWidth <= 768;



const Project = ({ title, logo, desc, github, live, techs, direction }) => {

    const renderMobileView = () => (
        <Bounce>
            <div className="project">
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
            <Fade when={isMobile} direction={direction === 'left' ? 'left' : 'right'} duration={1000}  >
                <div className="proj-img-con">
                    <img src={hrefs[logo]} alt="" />
                </div>
            </Fade>

            <Fade cascade duration={1000} >
                <div className="proj-content">
                    <Fade cascade >
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