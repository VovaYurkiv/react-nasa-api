import React from 'react'
import './RoverMenu.scss'
import { rovers } from '../data/rovers'

const RoverMenu = ({ setRover }) => {
  

    return (
            <ul className='rover-nav'>
                    <h2>Select a rover</h2>
                    {rovers.map((robot) => (
                        <li 
                            className='rover'
                            tabIndex='1'
                            onClick={() => setRover(robot.link)}
                            >
                            {robot.name}
                        </li>
                    ))}
            </ul>
    )
}

export default RoverMenu
