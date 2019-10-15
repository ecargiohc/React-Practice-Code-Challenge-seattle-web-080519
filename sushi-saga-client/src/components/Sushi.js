import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=> props.eat(props.sushi)/* Give me a callback! */ }>
        { props.eaten.includes(props.sushi) ===
          /* Tell me if this sushi has been eaten! */ 
          true ?
            null
          :
            <img src={props.sushi.img_url/* Give me an image source! */} alt="sushungry" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name/* Give me a name! */} - ${props.sushi.price/* Give me a price! */}
      </h4>
    </div>
  )
}

export default Sushi