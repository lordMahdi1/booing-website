import React from 'react';
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Stack from '@mui/material/Stack';

const Icon = (props) => {
    return ( 
        <div className="Icon">
            <Stack direction="row" spacing={2} style={{background :"black"}}>
           
            <props.icon style={{color: '#FFFFFF'}}></props.icon>
            
    
            <p style={{color: '#FFFFFF'}}>{props.name1}</p>
                
            </Stack>
        </div>
     );
}
 
export default Icon;