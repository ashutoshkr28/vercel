import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppName from './Components/AppName'
import AddTodo from './Components/AddTodo'
import TodoItems from './Components/TodoItems'
import { useState } from 'react'

function App() {

  const intialtodoitems = [
    {
      name: "buy milk",
      date: "12/04/2024"
    }
    ]

    const [todoItem, setTodoItem] = useState(intialtodoitems)

    const handleNewTodo = (newTodoName, newTodoDate) => {
      const addNewItem = [...todoItem,
        {name: newTodoName, date: newTodoDate}
      ]
      setTodoItem(addNewItem)
    }

    const handleOnDel = (itemDel) =>{
      console.log(`delete item : ${itemDel}`);
      const deleteClick = todoItem.filter(item => item.name !== itemDel)
      setTodoItem(deleteClick);
    }

  return (
    <center>
      <AppName></AppName>
      <AddTodo newTodo = {handleNewTodo}></AddTodo>
      <TodoItems todo = {todoItem} onDel = {handleOnDel}></TodoItems>
    </center>
  )
}

export default App
