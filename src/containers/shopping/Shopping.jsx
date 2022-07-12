import React from 'react'

import "./shopping.css"
import { Video } from '../../components';

const Shopping = () => {
  return (
    <div className='md__shop'>
      <div className='md__shop-text'>
        <h2>AR shopping assistant demo</h2>
        <p>
            Simple shopping demo for mobile devices developed in Unity using AR Foundation framework. Features include image 
            recognition, multi-platform support and animated GUI.
        </p>
      </div>
      <Video embedId='VQ5qc4Uqg5Y'/>
    </div>
  )
}

export default Shopping