import React  from 'react';
import {robots} from './robots';
import CardList from './CardList';
import Scroll from './Scroll';
import './App.css';

function App(){

  const[searchinput,setsearch]=React.useState("");
  function handle(e){
    setsearch(e.target.value);
  }
  const filtered=robots.filter(robot=>{
    return robot.title.toLowerCase().includes(searchinput.toLowerCase());
  })
  
 
  return(
    <div>
      <div className='heading'>
      <h1>Choose Your Game</h1>
      </div>
      <div className='input-btn'>
      <input type="search" placeholder="enter your Game Name" className="in-btn" onChange={handle}/>
      </div>
      <Scroll>
      <CardList games={filtered}/>
      </Scroll>
    </div>
  );
} 
export default App;