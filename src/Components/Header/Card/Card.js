import React from 'react'
import { Location } from 'react-router-dom'
import "./Card.css"

function Card({ food }) {


    // const handleclick = () => {
    // window.open('www.google.com')

    // }
    

  return (
    <div>
                     <div className='card'>
                <div className='main'>
                </div>
            <div className='card_container'>
                  <img src={food.strMealThumb} />
            </div>
            <div className='card_details'>
                <h3 className='name'>{food.strMeal}</h3>
              </div>
              <div className='card_btn'>
              <button onClick={()=>window.open(`${food.strYoutube}`)}>Click Video</button>
              </div>
            </div>

    </div>
  )
}

export default Card
