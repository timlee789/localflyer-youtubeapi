import { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";

import { Videos, ChannelCard} from '.';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  //const { id } = useParams()
  console.log(channelDetail, videos)
  // useEffect(() => {
  //   fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
  //   fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  // }, [id])

  return(
    <div>
      <div>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(206,3,184,1) 0%, rgba(184,26,192,1) 0%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </div>
      <div >
        <div  />
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default ChannelDetail