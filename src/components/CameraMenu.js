import React from 'react'
import './CameraMenu.scss'
import { cameras } from '../data/cameras'

const CameraMenu = ({ setCamera }) => {


    return (
        <div>
            <ul className='camera-nav'>
                    <h2>Select a camera</h2>
                    {cameras.map((cam) => (
                        <li 
                            className='camera'
                            tabIndex='1'
                            onClick={() => setCamera(cam.link)}
                            >
                            {cam.name}
                        </li>
                    ))}
            </ul>
    </div>
    )
}

export default CameraMenu
