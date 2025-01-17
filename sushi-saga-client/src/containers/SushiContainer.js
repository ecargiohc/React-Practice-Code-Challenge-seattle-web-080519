import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => {
          return <Sushi key={sushi.id} 
                        sushi={sushi} 
                        eat={props.eat}
                        eaten={props.eaten}/>
        })
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton fourMore={props.fourMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer