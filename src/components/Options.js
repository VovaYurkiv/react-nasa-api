import React from 'react'
import './Options.scss'
import RoverMenu from './RoverMenu'
import CameraMenu from './CameraMenu'
import SolMenu from './SolMenu'

const Options = ({ handleInput, setRover, setCamera, setSol, sol, getData }) => {



    return (
        <div className='whole-page'>
            <div className='options' style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
                <RoverMenu setRover={setRover} />
            </div>
            <div className='options' style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
                <CameraMenu setCamera={setCamera} />
            </div>
            <div className='options' style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
                <SolMenu 
                    handleInput={handleInput}
                    setSol={setSol}
                    sol={sol}
                    getData={getData} 
                />
            </div>
        </div>
    )
}

export default Options