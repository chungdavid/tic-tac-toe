import { useState } from 'react'
import { ResetBtn} from "./components/ResetBtn"
import { Header } from "./components/Header"
import { Board } from "./components/Board"

function App() {
  const[turn, changeTurn]=useState("X")
  const[XPositions, setX] = useState([0,0,0,0,0,0,0,0,0])
  const[OPositions, setO] = useState([0,0,0,0,0,0,0,0,0])
  const[winner,setWinner] = useState("")
  const[numMoves,setNumMoves] = useState(0)

  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  function updateTurn(){
      turn== "X" ? changeTurn("O") : changeTurn("X")
  }

  //checks if there is a winner by comparing input array to winning combinations, returns true if there is a winner
  function checkWinner(positions){
    for (let i = 0; i < 8; i++) {
      const [a, b, c] = winCombinations[i];
      if (positions[a] && positions[b] && positions[c]) {
        return true;
      }
    }
    return false;
  }

  function updatePosition(pos) {
    //track number of moves
    setNumMoves(numMoves+1);
    
    if(turn=="X"){
      //update positions
      const newPositions = [...XPositions]
      newPositions[pos]=1
      setX(newPositions)
      //check if there is a winner, if there is, update winner state
      if(checkWinner(newPositions)){setWinner("X")}
  } else if(turn=="O"){
      //update positions
      const newPositions = [...OPositions]
      newPositions[pos]=1
      setO(newPositions)
      //check if there is a winner, if there is, update winner state
      if(checkWinner(newPositions)){setWinner("O")}
    }
    
    updateTurn();

  }

  function resetGame() {
    window.location.reload(false);
    /*TO DO*/
  }

  return (
  <div className="app-container">
    <Header turn={turn} winner={winner} numMoves={numMoves}/>
    <Board turn={turn} winner={winner} updatePositionCallback={(pos)=>updatePosition(pos)}/>
    <ResetBtn resetGameCallback={()=>resetGame()}/>
  </div>
  );
  
}

export default App;