import React from 'react'
import { Todo } from '../model'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDone } from "react-icons/md";
import "./style.css"


type Props = {
    todo: Todo,
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <form className='todo_single'>
        <span className="todos_single--text">{todo.todo}</span>
        <div className='icon_div'>
            <span className='icons'><MdEdit /></span>
            <span className='icons'><MdDelete /></span>
            <span className='icons'><MdDone /></span>
        </div>
    </form>
  )
}

export default SingleTodo