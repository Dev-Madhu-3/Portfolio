import prof from '../../assets/profile-image.JPG'
import './index.css'

const NavBar = () => {
    return (
        <nav className='Header-con'>
            <div className='responsive-container'>
                <div className='profile-name-container'>
                    <img className='profile-logo' src={prof} alt='Profile' />
                    <p className='name'>Madhu Uppala</p>
                    <p className='name-tagline'>- Software Developer</p>
                </div>
                <div className='nav-items-container'>
                    <a className='nav-item' href=''>Projects</a>
                    <a className='nav-item' href=''>Skills</a>
                    <a className='nav-item' href=''>Certifications</a>
                    <a className='nav-item' href=''>Contact</a>
                    <button className='connect-me-btn'>Connect with me</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar