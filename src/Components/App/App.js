import './App.css';
import React from "react";
import {Box} from "@mui/material";
import {Routes,Route,Link} from 'react-router-dom';
import Main from "../main/main";
import VideoDetail from "../video-detail/video-detail";
import Navbar from "../navbar/navbar";
import Channel from "../channel/channel";
import Search from "../search/search";


function App() {
    return (
        <Box>
           <Navbar/>
           <Main/>
           <Routes>
               <Route path={'/main'} element={<Main/>}/>
               <Route path={'/channel/:id'} element={<Channel/>}/>
               <Route path={'/video/:id'} element={<VideoDetail/>}/>
               <Route path={'/search/:id'} element={<Search/>}/>
           </Routes>


        </Box>

     );
}

export default App;



