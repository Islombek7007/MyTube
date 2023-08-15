import React from "react";
import {CheckCircle} from "@mui/icons-material";
import {Box, CardContent,} from "@mui/material";
import {Link} from 'react-router-dom'
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


const ChannelCard =({video , marginTop})=>{
    return(
        <Box
            sx={{
                boxShadow:'none',
                borderRadius:'20px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:{ xs: '356px', md:'320px'},
                height:'326px',
                marginTop: marginTop,
            }}
        >
            <Link to={`/channel/${video?.id.channelId ? video?.id.channelId : video?.id}`}>
                <CardContent
                    sx={{
                        display:'flex',
                        flexDiraction:'column',
                        justifyContent:'center',
                        textAlign:'center'
                    }}
                >
                    <CardMedia
                        image={video?.snippet?.hiegh?.url}
                        alt={video?.snippet ?.title}
                        sx={{
                            borderRadius:'50%',
                            height:'100px',
                            width:'100px',
                            mb:'2',
                            border:"2px solid #e3e3e3",
                        }}
                    />
                    <Typography variant={'h6'}>
                        {video?.snippet?.title}{' '}
                        <CheckCircle sx={ { fontSize:'14px' , color:'gray' , ml:'5px'}}/>
                    </Typography>
                    {video?.statistics?.subscriberCount &&(
                        <Typography sx={{fontSize:'15px' , fontWeight:500 , color:'gray'}}>
                            {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-Us')} Subscribers
                        </Typography>
                    )}

                </CardContent>
            </Link>
        </Box>
    )

}
export default ChannelCard