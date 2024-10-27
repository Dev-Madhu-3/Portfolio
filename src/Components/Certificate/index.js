import React from 'react'
import certificateReact from "../../assets/certificate-react.png"
import certificatePython from "../../assets/certificate-python.png"
import certificateNode from "../../assets/certificate-node.png"
import certificateJs from "../../assets/certificate-js.png"
import certificateJsEssentials from "../../assets/certificate-js-essentials.png"
import certificateSQL from "../../assets/certificate-sql.png" 
import certificateWeb from "../../assets/certificate-static-web.png" 
import certificateVc from "../../assets/certificate-vc.png" 
import certificateFlex from "../../assets/certificate-flexbox.png" 
import certificateFlexBt from "../../assets/certificate-flexbox-bt.png" 
import './index.css'

const hrefs = {
    certificateReact,
    certificatePython,
    certificateNode,
    certificateJs,
    certificateJsEssentials,
    certificateSQL,
    certificateWeb,
    certificateVc,
    certificateFlex,
    certificateFlexBt
}

const Certificate = ({ title, imgUrl, num, certificateUrl }) => {
    return ( 
        <a className="certificate" target='_blank' rel="noopener noreferrer" href={certificateUrl}>
            <div className="certi-title">{title}</div>
            <div className="certi-img">
                <img src={hrefs[imgUrl]} alt="certificates" />
            </div>
            <div className="certi-crd">
                <div className="crti-num">{num}</div>
            </div>
        </a>
    )
}

export default Certificate