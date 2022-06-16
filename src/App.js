// src/App.js
import './App.css';
import { Card, Row, Col, Divider, Button } from 'antd';
import foodsJson from './foods.json';
import {useState} from 'react';
import Box from './components/Box';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsJson)
  const [search, setSearch] = useState('')

  function handleNew(e, newFood){
    e.preventDefault()
    setFoods([newFood, ...foods])
  }
  return(
  
    // After importing the components we can render them directly:
    <div className="App">
    
      <AddFoodForm onNew = {handleNew}/>
      <Button> Hide Form / Add New Food </Button>
      <Search search = {search} setSearch = {setSearch}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */
        foods
        .filter((elem) => elem.name.toLowerCase().includes(search.toLowerCase()))
        .map((elem, i) => {
        return <Box key = {elem.name + i} food = {elem}/>
        
        })}
      </Row>
    </div>
  )} 

  
export default App;