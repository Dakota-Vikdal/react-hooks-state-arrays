import React, {useState} from 'react'
import {spicyFoods, getNewRandomSpicyFood} from '../data'




function SpicyFoodList() {

  const [food, setFood] = useState(spicyFoods)
  const [select, setSelect] = useState('All')

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...food, newFood];
    setFood(newFoodArray);
  }

  const foodToDisplay = food.filter((foodObj) => {
    if (select === "All"){
      return true;
    } else {
      return foodObj.cuisine === select;
    }
  })
  
  const renderFood = foodToDisplay.map(foodObj => {
    return <li key={foodObj.id}>
      <strong>Name: </strong> {foodObj.name} |
      <strong> Cuisine: </strong> {foodObj.cuisine} |
      <span onClick={() => handleUpdate(foodObj.id)}><strong> Heat: </strong> {foodObj.heatLevel}</span> |
      <span onClick={() => {handleRemove(foodObj.id)}}>🗑️</span>
      </li>
  })

  function handleRemove(id) {
    const newArray = food.filter((foodObj) => foodObj.id !== id)
    setFood(newArray)
  }

  function handleUpdate(id) {
    const newArray = food.map((foodObj) => {
      if (foodObj.id === id){
        return {
          ...foodObj,
          heatLevel: foodObj.heatLevel + 1
        }
      } else{
        return foodObj
      }
    })
    setFood(newArray)
    
  }

  function handleChange(e) {
     setSelect(e.target.value)
  }

  

  return (
    
      <div>
        <button onClick={handleAddFood}>Add Food</button>
        <ul style={{cursor: 'pointer'}}>{renderFood}</ul>
        <select name="filter" onChange={handleChange}>
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Sichuan">Sichuan</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
        </select>
      </div>
    
  )
}





export default SpicyFoodList
























// import React, { useState } from "react";
// import { spicyFoods, getNewRandomSpicyFood } from "../data";

// function SpicyFoodList() {
//   const [foods, setFoods] = useState(spicyFoods);
//   const [select, setSelect] = useState("All")

//   function options(e) {
//     setSelect(e.target.value)
//   }

//   function handleAddFood() {
//     const newFood = getNewRandomSpicyFood();
//     const newFoodArray = [...foods, newFood];
//     setFoods(newFoodArray)
//   }

//   const foodList = foods.map((food) => (
//     <li key={food.id} onClick = {() => handleLiClick(food.id)}>
//       {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
//     </li>
//   ));

//   function handleLiClick(id) {
//     const newFoodArray = foods.filter((food) => food.id !== id);
//     setFoods(newFoodArray);
//   }

//   const foodFilter =  foods.filter((food) => {
//     if (select === "All") {
//       return true
//     } else {
//       return food.cuisine === select
//     }
//   })

//   console.log(foodFilter)

//   return (
//     <div>
//       <button onClick={handleAddFood}>Add New Food</button>
//       <ul>{foodList}</ul>
//       <select name="filter" onChange= {options}>
//         <option value="All">All</option>
//         <option value="American">American</option>
//         <option value="Sichuan">Sichuan</option>
//         <option value="Thai">Thai</option>
//         <option value="Mexican">Mexican</option>
//       </select>
//     </div>
//   );
// }

// export default SpicyFoodList;
