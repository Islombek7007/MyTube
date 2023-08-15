import React from 'react';
import {Stack} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loader() {
    return (
        <Stack>
            <Box sx={{margin:'0 auto',justifyContent:'center'}}>
                <CircularProgress/>
            </Box>
        </Stack>
    );
}

export default Loader;