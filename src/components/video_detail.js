import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>; // this is because it takes sometime to fetch the video data, and we don't want other code to have problem if there is no video when it is still trying to fetch the data
    };

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; //this is the same as "https://www.youtube.com/embed/" + videoId
    
    return (
        <div className = "video-detail col-md-8">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item" src = {url}></iframe>
            </div>
            <div className = "details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;