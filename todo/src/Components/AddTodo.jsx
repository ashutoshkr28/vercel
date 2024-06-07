import React, { useState } from 'react'

const AddTodo = ({newTodo}) => {

    const [todoName, setTodoName] = useState()
    const [todoDate, setTodoDate] = useState()

    const handleOnName = (event) => {
        setTodoName(event.target.value)
    }
    const handleOnDate = (event) => {
        setTodoDate(event.target.value)
    }

    const handleOnClicked = () => {
        newTodo(todoName, todoDate)
        setTodoName("")
        setTodoDate("")
    }


  return (
    <>
      <div className="container text-center">
  <div className="row">
    <div className="col-6">
        <input type="text"value={todoName}  onChange={handleOnName} />
    </div>
    <div className="col-4">
        <input type="date" value={todoDate} onChange={handleOnDate} />
        </div>
    <div className="col-2">
        <button type='button' className='btn btn-success' onClick={handleOnClicked}>AddTodo</button>
    </div>
  </div>
</div>
    </>
  )
}

export default AddTodo
