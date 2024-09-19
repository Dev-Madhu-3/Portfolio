import { useState } from 'react'
import bgvid from './assets/background-video.mp4'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { DNA } from 'react-loader-spinner'
import './App.css'

function App() {
  const [isLoading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000)


  return (
    <div className="App">
      {isLoading && <div className='loader-container'>
        <DNA
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>}
      <div className='background-video-container'>
        <video className='bg-video' autoPlay muted loop>
          <source src={bgvid} type="video/mp4"></source>
          Your browser does not support HTML5 video.
        </video>
      </div>
      {isLoading || <div className='main-container'>
        <Navbar />
        <Home />
      </div>}
    </div>
  )
}

export default App
