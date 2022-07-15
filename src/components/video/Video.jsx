import React from 'react';
import './video.css';
// import ReactPlayer from 'react-player';
// import { ReactVideo } from 'reactjs-media';

const Video = ( { embedId } ) => {
    return (
        <div className='md__video'>
            {/* <ReactPlayer controls url={ url }/> */}
            {/* <ReactVideo src= { url} /> */}
            <iframe 
                width="560" 
                height="315" 
                src= { `https://www.youtube.com/embed/${embedId}` } 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen="true"
            >
                
            </iframe>
        </div>
    )
}

export default Video
