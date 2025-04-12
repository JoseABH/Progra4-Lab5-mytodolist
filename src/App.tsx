
import './App.css'
import { useState } from 'react'

interface Todo {
  description: string
}
function App() {

  const [todoDescription, setTodoDescription] = useState('')
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleChange = (e: any) => {
    setTodoDescription(e.target.value)
  }

  const handleClick = () => {
    const temptodoList = [...todoList]
    const newTodo = {
      description: todoDescription

    }

    temptodoList.unshift(newTodo)
    setTodoList(temptodoList)
  }

  return (
    <>
      <div id='contenedor'>
        <div id='barra'>
          <input 
            id='inputbarra'
            type='text'
            value={todoDescription}
            onChange={handleChange}
            placeholder='New task' />
          <button onClick={handleClick}>Add Item</button>
        </div>

        <div>TODOs here:</div>
        <ul>
          {todoList.map((todo, index) => {
            return <li key= {index}>{todo.description}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
