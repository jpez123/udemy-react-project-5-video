//Import libraries
import React from 'react';

//Component
const VideoDetail = ({video}) => {
    //Case when video is not loaded yet
    if (!video) {
        return <div>Loading...</div>
    }

    //Variables
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    //Default return statement
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title={video.snippet.description} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>
                    {video.snippet.description}
                </p>
            </div>
        </div>
    )
};

//Export
export default VideoDetail;