import {Square} from "../components/Square"

export function Board(props) { 
    return(
      <div className="board">
        <div className="row">
          <Square pos="0" {...props}/>
          <Square pos="1" {...props}/>
          <Square pos="2" {...props}/>
        </div>
        <div className="row">
          <Square pos="3" {...props}/>
          <Square pos="4" {...props}/>
          <Square pos="5" {...props}/>
        </div>
        <div className="row">
          <Square pos="6" {...props}/>
          <Square pos="7" {...props}/>
          <Square pos="8" {...props}/>
        </div>
      </div>
   )
  }