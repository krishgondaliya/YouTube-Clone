import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect = {props.onVideoSelect}
                key = {video.etag} 
                video = {video} />
        );
    }); // this works as a for loop, we are loop through all the videos in the video list
    // each item in the array should have a key in place, so that when we update certain item in the array, we can easily locate it.
    return (
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;