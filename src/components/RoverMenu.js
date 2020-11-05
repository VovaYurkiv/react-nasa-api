import React from 'react'
import './RoverMenu.scss'

const RoverMenu = ({ setRover }) => {

    

    return (
            <ul className='rover-nav'>
                    <h2>Select a rover</h2>
                    <li onClick={() => setRover('curiosity')} className='rover'>Curiosity</li>
                    <li onClick={() => setRover('opportunity')} className='rover'>Opportunity</li>
                    <li onClick={() => setRover('spirit')} className='rover'>Spirit</li>
                </ul>
    )
}

export default RoverMenu
