import React from 'react';
import './examples.css'

import { AiFillGithub } from 'react-icons/ai'

const Examples = () => {
  return (
    <div className='md__examples'>
      
      
      
      <a href="https://github.com/AntShestak/CSharp_Examples" target="_blank" rel="noreferrer">
        <button type='button' >
          <h3>C# Code Examples</h3>
          <span >

            <AiFillGithub color='white' size='2em' />

          </span>
        </button>
      </a>
       
      
    </div>
  )};

export default Examples;
