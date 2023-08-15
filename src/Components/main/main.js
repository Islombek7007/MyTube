import React, {useEffect, useState} from "react";
import {Stack, Box, Container, Typography} from "@mui/material";
import {colors} from "../constatnts/color";
import Category from "../category/category";
import {ApiService} from "../service/api.service";
import Videos from "../videos/videos";


const Main=()=>{
    const [selectCategory,setSelectCategory]=useState('New')
    const [videos,setVideos]=useState([])

    const selectedCategoryHandler = category => setSelectCategory(category)
    useEffect(()=>{
        const getData = async () =>{

            try {
                const data =await ApiService.fetching(`search?part=snippet&q=${selectCategory}`)
                setVideos(data.items)
                console.log(data)
            }catch (error){
                console.log("Warning!"+ error);
            }
        }
        getData()
    }, [selectCategory])

    return(
        <Stack>
            <Category
                selectedCategoryHandler={selectedCategoryHandler}
                selectedCategory={selectCategory}
            />
            <Box p={2} sx={{ height: '90vh' }}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight="bold" mb={2}>
                        {selectCategory} <span style={{ color: colors.secondary }}>videos</span>
                    </Typography>
                    <Videos videos={videos}/>
                </Container>
            </Box>
        </Stack>
    )
}


export default Main;