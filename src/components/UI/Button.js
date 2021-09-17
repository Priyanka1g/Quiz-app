import React from 'react'

function Button(props) {
    return (
             <button 
             onClick={props.onClick}
             className={`p-4 bg-white rounded shadow font-semibold ${props.textcolor}`}>
             {props.answer}
             </button>
    )
}

export default Button
