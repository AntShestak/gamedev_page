import React from 'react';
import './videoL.css';
// import ReactPlayer from 'react-player';
// import { ReactVideo } from 'reactjs-media';

const VideoL = ( { embedId } ) => {
    return (
        <div className='md__videoL'>
            {/* <ReactPlayer controls url={ url }/> */}
            {/* <ReactVideo src= { url} /> */}
            <iframe 
                width="840" 
                height="472.5" 
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

export default VideoL
