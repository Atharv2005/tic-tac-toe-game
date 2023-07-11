import { useState } from 'react'
import './App.css'
import Box from './components/Box.jsx'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  // Box on click function 
  const boxOnClick = (boardIdx) => {
    const updatedBoard = board.map((item, currIdx) => {
      if (boardIdx === currIdx) {
        return xPlaying ? "X" : "O"
      } else {
        return item
      }
    })

    // Check Winner

    const winner = checkWinner(updatedBoard)
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores
        oScore += 1
        setScores({ ...scores, oScore })
        setBoard(Array(9).fill(null))
        return alert("O is the winner")
      } else {
        let { xScore } = scores
        xScore += 1
        setScores({ ...scores, xScore })
        setBoard(Array(9).fill(null))
        return alert("X is the winner")
      }
    } setBoard(updatedBoard)
    setXPlaying(!xPlaying)
    console.log(updatedBoard)
  }
  const checkWinner = (board) => {
    for (let i = 0; i < winconditions.length; i++) {
      const [a, b, c] = winconditions[i]
      if (board[a] === board[b] && board[b] === board[c] && board[c] === board[a]) {
        return board[a]
      }
    }
  }

  // Check for a draw

  const isBoardFilled = board.every((value) => value !== null)
  if (isBoardFilled) {
    setBoard(Array(9).fill(null))
    alert("match drawn")

  }
  const winconditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]


  return (

    <div>
      <div className='scores'>
        <p> X Score: {scores.xScore}</p>
        <p> O Score: {scores.oScore}</p>
      </div>
      <div className="board-flex">

        <div className='board'>{
          board.map((item, index) => {
            return <Box key={index} value={item} onClick={() => item === null && boxOnClick(index)} />
          })
        }
        </div>
      </div>
    </div>
  )
}

export default App
