import React, {useEffect, useState} from 'react';
import Wrapper from "../common-components/Wrapper";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import Header from "../common-components/Header";
import useVideos from "../../hooks/useVideos";

const MyYoutubeHooks = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('buildings')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])


  return (
    <Wrapper>
      <Header name="My Youtube with Hooks"/>
      <SearchBar onSearchSubmit={search}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelected={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );

}

export default MyYoutubeHooks;