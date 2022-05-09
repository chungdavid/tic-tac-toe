export function ResetBtn(props){
    return(
      <button className="reset-button" onClick={()=>props.resetGameCallback()}>Reset</button>
    )
  }