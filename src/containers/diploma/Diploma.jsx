import React from 'react';
import './diploma.css';
import {Video} from '../../components';

function Diploma() {
    return (
        <div className='md__diploma'>
            <div className='md__diploma-info'>
                <h2>City & Guilds Level 7 Diploma</h2>
                <h4>Game Development for Computer Gaming</h4>
                <p>
                    Course took me over 4 years to complete, with the main modules being DirectX and Unity development. As an optional modules
                    I had done 3D modelling and game testing. During my studies I had participated in game jams with fellow students as well as 
                    new product testing event with Microsoft. Course was finalised with long examination process consisting of 4 exams.
                    During examination I had to produce research papers, build games based on supplied technical design documentation, implement 
                    game features, find bugs in supplied demos and submit bug reports. Examinations were as follows:
                </p>
                <ul>
                    <li>3D Graphics for Computer Games</li>
                    <li>Level Design for Computer Games</li>
                    <li>Artificial Intelligence for Computer Games</li>
                    <li>Computer Games Design and Development</li>
                </ul>
                    
                
            </div>
            <div className='md__diploma-video'>
                <Video embedId='ZyRJOsbDCu0'/>
            </div>
        </div>
    )
}

export default Diploma

