import React from 'react'
import { Link } from 'react-router-dom'
const Navbar =(props) =>{

    
    return (
        <div>
           <header className="">
           <h1 className="font-bold text-3xl text-white">Welcome to Quiz App</h1>
           </header> 
           <Link style={{ textDecoration: 'none'}} to={`/quiz`}>
           <button className="ml-auto bg-white text-purple-700 p-3 font-semibold rounded shadow mt-6 ">PLAY QUIZ</button>
           </Link>
           </div>
    )
}

export default Navbar