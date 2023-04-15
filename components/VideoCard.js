import Link from 'next/link';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../utils/constants';

const VideoCard = ({video}) => {
   // console.log( video)
    return (
        <Card sx={{width:{xs:'100%', sm:'358px', md: '320px' }, boxShadow:'none', borderRadius: 0}}>
            <Link href={video.videoId? `/video/${video.videoId}` : demoVideoUrl}>
                <CardMedia 
                    image={video.snippet?.thumbnails?.high?.url}
                    alt={video.snippet?.title}
                    sx={{width:{xs: '100%', sm: '358px', md: '320px'}, height: 180}}
                />
            </Link>
            <CardContent sx={{backgroundColor: '#eee', height: '106px'}}>
                <Link href={video.videoId? `/video/${video.videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#000'>
                        {video.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link href={video.snippet?.channelId? `/channel/${video.snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                        {video.snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{fontSize:12, color:'gray', ml: '5px'}} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard