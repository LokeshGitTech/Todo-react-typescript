import React, { useState } from 'react'
import "./style.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {

  return (
   <form className='input'>
    <input
     type='input'
     placeholder='Enter Task' 
     className='input_box'
     value={todo}
     onChange={
        (e) => setTodo(e.target.value)
     }
     />
    <button className='input_submit'>GO</button>
   </form>
  )
}

export default InputField