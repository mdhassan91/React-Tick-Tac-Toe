import { useState,useEffect } from "react";
import Square from "./Square";

function Game() {
  // let squares = [...Array(9)]
  const [squares,setSquares]=useState([...Array(9)])
  console.log(squares);
  const [isXNext,setIsXNext]=useState(true);
 
  const winner=calculateWinners(squares)
    function renderSquare(i) {
        return <Square
          value={squares[i]}
          onClick={()=>{
            const nextSquares = squares.slice();
            nextSquares[i] = isXNext ? "X" : "O";;
            setSquares(nextSquares);
            setIsXNext(!isXNext);
          }}
        />;
      }
useEffect(() =>{
 
    if(winner){
    
      alert(`Winner:${winner}`) 
      setSquares([...Array(9)]);
    }
    // else if(isBoardFull(squares) && !winner){
    //    alert('Draw!');
    //    setSquares([...Array(9)]);
    // }
  //   else{
  //     return "Next Player: "+(isXNext ? "X" : "O")
   
  // }
},[squares])



    
    return (
        <div className="container"   style={{marginTop:"100px"}}>
          <div className="game"  style={{
            width: "fit-content",
            margin: "auto"
          }}  >
            <div className="game-board" 
             style={{
              display: "grid",
              gridTemplateColumns: "max-content max-content max-content",

              }} 
              >
           
              {/* <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
              </div>
              <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
              </div>
              <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
              </div> */}
              {
[...Array(9)].map((div,divIndex) =>(
 <div key={divIndex} className="board-row"
 style={{
 
 
 backgroundColor: "rgba(255, 255, 255, 0.8)",
 border: "1px solid rgba(0, 0, 0, 0.8)",
 width: "100%",
 height: "100%",
  // padding: "10px"
  }}
 >
    {renderSquare(divIndex)}</div>
))


              }
            </div>
          </div>
          {/* <div className="game-info">{getGameStatus()}</div> */}

<div className="restart">
  <button className="restart-btn" onClick={()=>{
    setSquares([...Array(9)]);
    setIsXNext(true)
  }}>Restart Game</button>
</div>

      </div>
         
       
       
            
      );}



      function calculateWinners(squares) {
        const lines=[
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6],
        ]
        for (let i=0; i<lines.length;i++){
          const [a,b,c] = lines[i];
      if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c])
      return squares[a];

        }
      return null
      
      }

      function  isBoardFull(squares) {
       for(let i = 0; i < squares.length; i++){
         if(squares[i]===null)return false;
       } 
       return true;
      }
      
    









      
export default Game