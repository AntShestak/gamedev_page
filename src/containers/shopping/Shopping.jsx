import React from 'react'

import "./shopping.css"
import { VideoL } from '../../components';
import { AiFillGithub} from 'react-icons/ai'

const Shopping = () => {
  return (
    <div className='md__shop'>
      <div className='md__shop-text'>
        <h2>AR shopping demo</h2>
        <p>
            Simple shopping demo for mobile devices developed in <b>Unity</b> using <b>AR Foundation</b> framework. Features include image 
            recognition, multi-platform support and animated GUI.
        </p>
      </div>
      <div className='md__shop-link'>
        <a href="https://github.com/AntShestak" target="_blank" rel="noreferrer">
          <div className='md__shop-icons_changeColor'>
              <AiFillGithub  size='1.5em'/>
          </div>        
        </a>
      </div>
      
      <VideoL embedId='VQ5qc4Uqg5Y'/>
    </div>
  )
}

export default Shopping