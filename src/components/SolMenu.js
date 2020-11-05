import React from 'react'
import './SolMenu.scss'

const SolMenu = ({ handleInput, setSol, sol }) => {




    return (
        <div>
           <ul className='sol-nav'>
            <h2>Select a sol</h2>
                <div className='submit'>
                    <input
                        onChange={handleInput}
                        className='sol'
                        // value={sol}
                        type='number'
                        placeholder='Enter a sol(Mars day)'>   
                    </input>
                    <button onClick={() => setSol(sol)} className='explore-button'>Explore now</button>
                </div>
            </ul>
        </div>
    )
}

export default SolMenu
