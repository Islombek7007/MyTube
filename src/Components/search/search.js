import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {ApiService} from "../service/api.service";
import {Box,Typography,Container} from "@mui/material";
import Videos from "../videos/videos";
import {colors} from "../constatnts/color";


const Search=()=>{
    const [videos,setVideos]=useState([])
    const {id}=useParams()


    useEffect(()=>{
        const getData = async () =>{

            try {
                const data =await ApiService.fetching(`search?part=snippet&q=${id}`)
                setVideos(data.items)
                console.log(data.items)
            }catch (error){
                console.log(error);
            }
        }
        getData()
    }, [id])



    return(
        <Box p={2} mt={'250px'} sx={{height:'120vh'}}>
            <Container maxWidth={'90%'}>
                <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                    Search results for <span style={{color:colors.secondary}}>{id}</span>Videos
                </Typography>
                <Videos videos={videos}/>
            </Container>

        </Box>
    )
}
export default Search