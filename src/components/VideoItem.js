//Import CSS
import './VideoItem.css';

//Import libraries
import React from 'react';

//Component
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)} >
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} className="ui image" />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
};

//Export
export default VideoItem;