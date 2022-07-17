import React from 'react';
import './Scroll.css';
const Scroll =(props)=>{
   return(
       <div style={{overflow: 'scroll',border: '5px solid black',height:'500px'}} className="scroll">
           {props.children}
       </div>
   );
};
export default Scroll;