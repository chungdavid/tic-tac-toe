export function Header(props){
    if(props.winner==""){ //if there is no winner
      if(props.numMoves==9){ 
        return( //if there is a draw
          <div>
            <h1>Tic Tac Toe</h1>
            <h2>Draw!</h2>
          </div>
        )
      } else {
        return( //otherwise continue game
          <div>
            <h1>Tic Tac Toe</h1>
            <h2>Player {props.turn}'s turn.</h2>
          </div>
        )
      }
    } else { //if there is a winner, display winner
      return(
        <div>
          <h1>Tic Tac Toe</h1>
          <h2>Player {props.winner} wins!</h2>
        </div>
      )
    }
  }