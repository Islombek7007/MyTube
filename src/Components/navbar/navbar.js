import React from "react";
import {Stack,Link} from "@mui/material";
import {colors} from "../constatnts/color";
import {logo} from "../constatnts";
import SearchBar from "../search-bar/search-bar";

const Navbar=()=>{


    return(

        <Stack direction={"row"} alignItems={'center'} justifyContent={'space-between'} p={'2'}
               sx={{position:"sticky" ,top:0, zIndex:999, backgroundColor:colors.color,padding:'2px'}}>
            <Link to={'/'}>
                <img src={logo} alt="logo" height={30}/>
            </Link>
            <SearchBar/>
        </Stack>

    )
}

export default Navbar;

