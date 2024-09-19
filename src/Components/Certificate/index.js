import React from 'react'
import certificateReact from "../../assets/certificate-react.png"
import './index.css'

const hrefs = {
    certificateReact,
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