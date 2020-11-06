import React, {useState} from 'react'
import './MainSection.scss'


const MainSection = ({ photos, flag, picsPerPage }) => {



    return (
        <div className='main-section'>
            {photos.slice(0, picsPerPage).map((el) => {
                return (
                    <div>
                        <img className='main-photos' src={el.img_src} alt=''></img>
                    </div>
                )
            })}
            </div>
    )
}

export default MainSection










