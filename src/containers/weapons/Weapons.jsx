import React from 'react'

import "./weapons.css"
import { VideoL } from '../../components';
import diagram from '../../images/Diagram.png'

const Weapons = () => {
  return (
    <div className='md__weapons gradient__bg'>
      <div className='md__weapons-content'>
        <h2>Weapon selection demo</h2>
        <h4>System design approach</h4>
        {/* <img src={diagram} alt="Diagram"/> */}
      </div>
      <VideoL embedId='JNtqxQ3wQP0'/>
    </div>
  )
}

export default Weapons