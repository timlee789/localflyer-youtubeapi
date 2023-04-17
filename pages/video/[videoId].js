import { useState, useEffect } from "react";
import Link  from "next/link";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useRouter } from "next/router";
import Videos from '../../components/Videos';
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import Header from "@/components/Header";

const VideoDetail = () => { 
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { query } = useRouter();
  const id = query.videoId;
  console.log(id)
  
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  }, [id]);
  if(!videoDetail?.snippet) return 'Loading...';
  const { snippet: {title, channelId, channelTitle}, statistics: { viewCount, likeCount} } = videoDetail
  console.log(videoDetail)
  return (
    <div>
      <Header />
    <Box minHeight='95vh'>
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className = 'react-player'
                controls
                />
            <Typography color='#000' variant="h5" frontWeight='bold' p={2}>
               {title} {/* {videoDetail.snippet.title} */}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{color: '#000'}} py={1} px={2}>
              <Link href={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6'}} color='#000'>
                  {channelTitle}
                  <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}} />
                </Typography>
              </Link>
            <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant="body1" sx={{opacity: 0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{opacity: 0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
            </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
        <Videos videos={videos} direction='column' />
         </Box>
      </Stack>
    </Box>
    </div>
  )
}

export default VideoDetail