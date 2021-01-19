import React, {useState, useEffect} from 'react';
import './App.css';
import "tachyons"
import CardList from "./CardList";
//import {robots} from "./robots"
import SearchBox from "./SearchBox"
import Scroll from "./Scroll"

function App() {
  const [robots, setRobots]=useState([]);
  const [searchfield, setSearchfield]=useState('')

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>{setRobots(users)});
  },[])

  const onSearchChange=(event)=>{
    setSearchfield(event.target.value)
  }
  
  const filteredRobots= robots.filter(robot=>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  
  return (
    !robots.length ?
    <h1 className="tc">Loading</h1> :
    (
    <div className="App tc">
      <h1 className="f2">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots}/>
      </Scroll>
    </div>
    )
  );
}

export default App;
