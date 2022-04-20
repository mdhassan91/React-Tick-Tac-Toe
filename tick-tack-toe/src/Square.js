import React, { useState } from "react";
import ReactDOM from "react-dom";


const Square = ({value,onClick}) => {
    return ( <>
<button className="square"  onClick={onClick} 
style={{
    width: '100px',
    height: '100px',
    fontSize: 'x-large',
    fontWeight:" bold",
backgroundColor:"black",
    color: 'yellow',
    border:"none",
    outline: "none"
}}


>{value}</button>

    </> );
}
 
export default Square;