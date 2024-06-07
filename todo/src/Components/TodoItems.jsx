import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({todo, onDel}) => {
  return (
    <>
    {todo.map((item) =><TodoItem key = {item.name} todoName = {item.name} todoDate = {item.date} onDel = {onDel}></TodoItem> )}
      
    </>
  )
}

export default TodoItems
