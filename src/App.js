import bgvid from './assets/background-video.mp4'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='background-video-container'>
        <video className='bg-video' autoPlay muted loop>
          <source src={bgvid} type="video/mp4"></source>
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className='main-container'>
        <Navbar />
        <Home />

      </div>
    </div>
  )
}

export default App
