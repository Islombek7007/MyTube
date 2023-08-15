import React, {useState} from "react";
import {IconButton, Paper} from "@mui/material";
import {colors} from "../constatnts/color";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom'

const SearchBar=()=>{
    const [value,setValue]=useState('')
    const navigate=useNavigate()

    const submitHandler=e=>{
        e.preventDefault()
        if(value){
            navigate(`/search/${value}`)
            setValue('')
        }
    }
    return(
        <Paper
            component={'form'}
            onSubmit={submitHandler}
            sx={{border:`1px solid ${colors.secondary}`,
                pl:2,boxShadow:'none',
                margin:'0 auto',
                width:'400px' }}>

            <input  className='w-75' type="text" placeholder='Search..' value={value} onChange={e => setValue(e.target.value)}/>

            <IconButton type='submit' sx={{p:'10px',color:colors.secondary}}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    )
}
export default SearchBar