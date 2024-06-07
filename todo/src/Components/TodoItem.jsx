import React from 'react'

const TodoItem = ({todoName, todoDate, onDel}) => {




  return (
    <>
        <div className="container text-center">
  <div className="row">
    <div className="col-6">
     {   todoName}
    </div>
    <div className="col-4">
       {todoDate}
        </div>
    <div className="col-2">
        <button type='button' className='btn btn-success' onClick={() => onDel(todoName)}>AddTodo</button>
    </div>
  </div>
</div>
    </>
  )
}

export default TodoItem
