import react from "../../assets/reactjs.jpg"
import expressjs from "../../assets/expressjs.jpg"
import mongo from "../../assets/mongodb.jpg"
import nodejs from "../../assets/nodejs.jpg"
import htmlLogo from "../../assets/html.jpg"
import css from "../../assets/css.jpg"
import js from "../../assets/js.jpg"
import python from "../../assets/python.jpg"
import othSkill from "../../assets/brain.png"
import './index.css'
import { Fade } from "react-awesome-reveal"

const hrefs = {
    react,
    expressjs,
    mongo,
    nodejs,
    htmlLogo,
    css,
    js,
    python,
    othSkill
}

const RenderSkill = ({ skill, percent, sklLogo }) => {
    return (
        <div className='skl-content'>
            <div className="skl-logo">
                <img src={hrefs[sklLogo]} alt="" />
            </div>
            <div className="skl">
                <div className="skl-name">{skill}</div>
                <div className="skl-bar"><div className="skl-prcnt" style={{ width: `${percent}%` }}><div className="prcnt">{percent + "%"}</div></div></div>
            </div>
        </div>)
}

const Skills = ({ title, skills, }) => {


    return (
        <Fade direction="up">
            <div className="skills">
                <div className={title === 'Backend' ? 'skl-title less-top' : 'skl-title'}>{title}</div>
                <div className="skill">
                    {skills.map((skill) => {
                        return <RenderSkill key={skill.name} skill={skill.name} percent={skill.percent} sklLogo={skill.logo} />
                    })}
                    {/* <Skill skill="ReactJs" percent="70" sklLogo="react" /> */}
                </div>
            </div>
        </Fade>

    )
}

export default Skills