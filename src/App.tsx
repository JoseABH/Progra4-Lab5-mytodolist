
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

    temptodoList.push(newTodo)
    setTodoList(temptodoList)


  }
  
  return (
    <>
    <div style={{ border: '1px solid blue', padding: 10 }}>

<div>
  <input
    type='text'
    value={todoDescription}
    onChange={handleChange}
    style={{ marginRight: 10 }} />
  <button onClick={handleClick}>Add Item</button>
</div>

<div>TODOs here:</div>

<div>{ JSON.stringify(todoList)}</div>


</div>
    
    </>
  )
}

export default App
