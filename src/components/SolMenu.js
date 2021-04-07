import React from 'react'
import './SolMenu.scss'
import { Link } from 'react-scroll';

const SolMenu = ({ handleInput, setSol, sol, getData }) => {

    return (
           <ul className='sol-nav'>
            <h2>Select a sol</h2>
                <div className='submit'>
                    <input
                        onChange={handleInput}
                        className='sol'
                        type='number'
                        placeholder='Enter a sol(Mars day)'>   
                    </input>
                    <button onClick={() => setSol(sol)} className='explore-button'>
                        <Link
                            to={'bottom-container'}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            onClick={getData}
                            >
                            Explore now
                        </Link>
                    </button>
                </div>
            </ul>
    )
}

export default SolMenu

