import React from 'react'
import crtisolid from "../../assets/certi_solid.png"
import './index.css'

const hrefs = {
    crtisolid,
}

const Certificate = ({ title, imgUrl, num }) => {
    return (
        <div className="certificate">

            <div className="certi-title">{title}</div>
            <div className="certi-img">
                <img src={hrefs[imgUrl]} alt="" />
            </div>
            <div className="certi-crd">
                <div className="crti-num">{num}</div>
            </div>
        </div>
    )
}

export default Certificate