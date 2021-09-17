import React from 'react'
import Button from './UI/Button'

function Quiz(props) {
    // const handleAnswer = ()=>{

    // }
    const shuffledAnswer = 
    [props.problem.correct_answer, ...props.problem.incorrect_answers]
    .sort(()=>Math.random()-0.5)
    return (
        <div className="flex flex-col">

                <div className="text-purple-800 p-10 rounded-lg bg-white shadow-md">
                    <h1 className="text-2xl" dangerouslySetInnerHTML={{__html:props.problem.question}}></h1>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-6">
                {shuffledAnswer.map((answer)=>(
                    <Button textcolor=
                        {props.displayAnswer
                        ?answer===props.problem.correct_answer 
                        ? 'text-green-300'
                        :'text-red-300'
                        :'text-purple-500'}
                        onClick={()=>props.handleAnswer(answer)} answer={ answer }
                    />
                ))}
                </div>
                {props.displayAnswer &&
                (
                    <button onClick={props.handleNextProblem}
                    className="ml-auto bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6">
                    Next Problem
                    </button>
                )}
                 </div>
    )
}

export default Quiz
