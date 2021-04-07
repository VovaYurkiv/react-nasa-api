import React from 'react'
import './MainSection.scss'


const MainSection = ({ photos, picsPerPage }) => {


    return (
        <div className='main-section'>
            {photos.slice(0, picsPerPage).map((el, index) => {
                return (
                    <div key={index}>
                        <img 
                            className='main-photos' 
                            src={el.img_src} 
                            alt=''
                        />
                    </div>
                )
            })}
            </div>
    )
}

export default MainSection










