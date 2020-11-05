import React, {useState} from 'react'
import './MainSection.scss'
import loading from './assets/loading.gif'


const MainSection = ({ photos, flag, picsPerPage }) => {



    return (
        <div>

        {flag ? <img classname='loading' src={loading} alt='' />: <div className='main-section'>
            {photos.slice(0, picsPerPage).map((el) => {
                return (
                    <div>
                        <img className='main-photos' src={el.img_src} alt=''></img>
                    </div>
                )
            })}
            </div>}
        </div>
    )
}

export default MainSection















