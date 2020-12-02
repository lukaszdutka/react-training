import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
  console.log(videos)
  const videoComponents = videos
    .map(v => {
      return <VideoItem key={v.id.videoId} video={v}/>;
    })
  return (
    <div className={'ui relaxed divided list'}>
      {videoComponents}
    </div>
  )
}

export default VideoList;