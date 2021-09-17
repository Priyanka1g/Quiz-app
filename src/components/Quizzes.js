import React, { useEffect, useState } from 'react'
import Quiz from './Quiz'

function Quizzes() {
  const url_api = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple'
  const [problem, setProblem] = useState([])
  const [currIndex, setCurrIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [displayAnswer, setDisplayswer] = useState(false)
  // const[endgame, setGameend] = useState(false)
  useEffect(() => {
    fetch(url_api).then((res) => res.json()
    ).then((data) => {
      setProblem(data.results)
    })
  }, [])

  const handleAnswer = (answer) => {
    // const newIndex = currIndex+1
    //  setCurrIndex(newIndex)
    if (!displayAnswer) {
      if (answer === problem[currIndex].correct_answer) {
        setScore(score + 1)
      }
    }
    setDisplayswer(true)
    //  if(newIndex >= problem.length){
    //    setGameend(true)
    //  }
  }
  const handleNextProblem = ()=>{
    setDisplayswer(false)
    setCurrIndex(currIndex+1)
  }
  return (
      
    <div>
      {problem.length > 0 &&
        (
          <div className="container">
            {currIndex >= problem.length && (
              <h1 className="text-3xl font-bold text-green-500">TOTAL SCORE <span className="text-white">{score}</span></h1>
            )}
            {currIndex < problem.length && (
              <Quiz problem={problem[currIndex]} handleAnswer={handleAnswer} displayAnswer={displayAnswer} 
                handleNextProblem = {handleNextProblem}
              />
            )}
          </div>
        )
      }
      {problem.length <= 0 && (<h1 className="text-2xl text-white font-bold">loading...</h1>)}
    </div>
  )
}

export default Quizzes