import React from 'react';

import './Cart.css'
const Card =(props)=>{
    
    return(
       
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
           
            <div className='card'>
                <h3 className='text-color'>Tile:</h3>
                <h3>{props.title}</h3>
                <h3 ><div className='text-color'>Platform:</div>{props.platform}</h3>
                <h3 ><div className='text-color'>Score:</div>{props.score}</h3>
                <h3 ><div className='text-color'>Genre:</div>{props.genre}</h3>
                <h3><div className='text-color'>editors_choice:</div>{props.editors_choice}</h3>
            </div>
        </div>
    );
}

export default Card;