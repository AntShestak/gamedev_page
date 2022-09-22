import React from 'react'

import "./shopping.css"
import { VideoL } from '../../components';

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
      <VideoL embedId='VQ5qc4Uqg5Y'/>
    </div>
  )
}

export default Shopping