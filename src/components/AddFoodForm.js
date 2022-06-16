import { Card, Row, Col, Divider, Input, Button } from 'antd';
import {useState} from 'react';

function AddFoodForm({onNew}) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [serving, setServing] = useState(0)

    function handleSubmit(e){
        let newFood = {name,image,calories,serving}
        onNew(e,newFood)
        setName("")
        setImage('')
        setCalories(0)
        setServing(0)
    }
    return (
      <form onSubmit = {handleSubmit}>
        <Divider>Add Food Entry</Divider>
  
        <label>Name</label>
    
        <Input value={name} type="text" onChange={(e) => {
            console.log(e.target.value)
            setName(e.target.value)
            }} />
  
        <label>Image</label>
        {/* render antd <Input /> type="text" here */}
        <Input value={image} type="text" onChange={(e) => {
            setImage(e.target.value)
            }} />
        <label>Calories</label>
        {/* render antd <Input /> type="number" here */}
        <Input value={calories} type="text" onChange={(e) => {
            setCalories(e.target.value)
            }} />
        <label>Servings</label>
        {/* render antd <Input /> type="number" here */}
        <Input value={serving} type="text" onChange={(e) => {
            setServing(e.target.value)
            }} />
        <button type="submit">Create</button>
      </form>
    );
  }
  
  export default AddFoodForm;
  
//   <img src={food.image} height={60} alt="food" />
//   <p>Calories: {food.calories}</p>
//   <p>Servings: {food.servings}</p>
//   <p>
//     <b>Total Calories: {food.calories} * {food.servings} </b> kcal
//   </p>