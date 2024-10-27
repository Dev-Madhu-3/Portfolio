import prof from '../../assets/profile-image.JPG'
import './index.css'

const NavBar = () => {
    return (
        <nav className='Header-con'>
            <div className='responsive-container'>
                <a className='profile-name-container' href='#intro'>
                    <img className='profile-logo' src={prof} alt='Profile' />
                    <p className='name'>Madhu Uppala</p>
                    <p className='name-tagline'>- Software Developer</p>
                </a>
                <div className='nav-items-container'>
                    <a className='nav-item' href='#projects'>Projects</a>
                    <a className='nav-item' href='#skills'>Skills</a>
                    <a className='nav-item' href='#certifications'>Certifications</a>
                    <a className='nav-item' href='#Contact'>Contact</a>
                    <a className='connect-me-btn' href='https://wa.me/+919989857197'>Connect with me</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar