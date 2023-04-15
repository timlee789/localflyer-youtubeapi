import { useState, useEffect } from "react";
import Link  from "next/link";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos} from '../../components/Videos';
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const VideoDetail = () => { 
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  //const {id} = useParams();
  
  // useEffect(() => {
  //   fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
  //   .then((data) => setVideoDetail(data.items[0]));

  //   fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
  //   .then((data) => setVideos(data.items))
  // }, [id]);
  if(!videoDetail?.snippet) return 'Loading...';
  const { snippet: {title, channelId, channelTitle}, statistics: { viewCount, likeCount} } = videoDetail
  console.log(videoDetail)
  return (
    <div>
      <div>
        <div>
          <div>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className = 'react-player'
                controls
                />
            <p>
               {title} {/* {videoDetail.snippet.title} */}
            </p>
            <div>
              <Link href={`/channel/${channelId}`}>
                <p>
                  {channelTitle}
                  <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}} />
                </p>
              </Link>
            <div>
                <p>
                  {parseInt(viewCount).toLocaleString()} views
                </p>
                <p>
                  {parseInt(likeCount).toLocaleString()} likes
                </p>
            </div>
            </div>
          </div>
        </div>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
        <Videos videos={videos} direction='column' />
         </Box>
      </div>
    </div>
  )
}

export default VideoDetail