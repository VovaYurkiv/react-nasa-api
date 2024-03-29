import React, { useState } from 'react'
import './App.scss'
import axios from 'axios'
import Navbar from './components/Navbar'
import Options from './components/Options'
import MainSection from './components/MainSection'


const App = () => {

  const apiKey = process.env.REACT_APP_NASA_KEY

  const [picsPerPage, setPicsPerPage] = useState(5)
  const [rover, setRover] = useState('')
  const [camera, setCamera] = useState('')
  const [sol, setSol] = useState(null)
  const[data, setData] = useState({
    flag: true,
    photos:[]
  })

  const {flag, photos} = data
  const showMoreItems = () => setPicsPerPage(previousValue => previousValue + 5)

  const handleInput = (e) => {
    e.preventDefault()
      setSol(e.target.value)
  }

  const getData = () => {
      async function getRobot() {
          const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${apiKey}`)
          setData({
              ...data,
              flag: false,
              photos: response.data.photos.filter(el => el.camera.name === camera)
          })
      }
      getRobot()
  }

  return (
      <> 
        <div className='top-container'>
          <Navbar />
          <Options 
            setRover={setRover}
            setCamera={setCamera}
            setSol={setSol}
            handleInput={handleInput}
            sol={sol} 
            getData={getData}
          />
        </div>
          <div className='bottom-container'>
              <MainSection 
                photos={photos}
                picsPerPage={picsPerPage} /> 
            { !flag && <button className='more-button' onClick={showMoreItems}>Load more. . .</button> }
        </div>
      </>
  )
}

export default App

