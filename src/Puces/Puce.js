import React from 'react';
import { FaCheckCircle } from "react-icons/fa";


const Puce = (props) => {
    return (
        <div>  
          <p style={{color: '#FFFFFF'}}><FaCheckCircle size='1rem' color='#00BFFF'/> {props.name}</p>
        </div>
    );
}
 
export default Puce;