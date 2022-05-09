import { useState } from 'react'

export function Square(props){
    //the state variable will keep track of what is inside the square (X or O)
    const [state, setState] = useState("") //initially empty
  
    function changeState(){
      if(state=="" && props.winner==""){ //only change state if user clicks on empty square and there is no winner
      //fill in the square when it is clicked
      setState(props.turn);
      //update the state of the board
      props.updatePositionCallback(props.pos);
      }
    }
  
    return(
        <div className="square" onClick={()=>changeState()}>{state}</div>
    )
  }
  