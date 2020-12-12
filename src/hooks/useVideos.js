import {useEffect, useState} from 'react';
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm])

  const search = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    }).then(r => {
      setVideos(r.data.items)
    });
  }

  return [videos, search];
}

export default useVideos;