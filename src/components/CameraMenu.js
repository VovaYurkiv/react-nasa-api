import React, { useState } from 'react'
import './CameraMenu.scss'

const CameraMenu = ({ setCamera }) => {


    return (
        <div>
            <ul className='camera-nav'>
                    <h2>Select a camera</h2>
                    <li onClick={() => setCamera('FHAZ')} className='camera'>Front Hazard Avoidance Camera</li>
                    <li onClick={() => setCamera('RHAZ')} className='camera'>Rear Hazard Avoidance Camera</li>
                    <li onClick={() => setCamera('MAST')} className='camera'>Mast Camera</li>
                    <li onClick={() => setCamera('CHEMCAM')} className='camera'>Chemistry and Camera Complex</li>
                    <li onClick={() => setCamera('MAHLI')} className='camera'>Mars Hand Lens Imager</li>
                    <li onClick={() => setCamera('MARDI')} className='camera'>Mars Descent Imager</li>
                    <li onClick={() => setCamera('NAVCAM')} className='camera'>Navigation Camera</li>
                    <li onClick={() => setCamera('PANCAM')} className='camera'>Panoramic Camera</li>
                    <li onClick={() => setCamera('MINITES')} className='camera'>Miniature Thermal Emission Spectrometer</li>
            </ul>
    </div>
    )
}

export default CameraMenu
