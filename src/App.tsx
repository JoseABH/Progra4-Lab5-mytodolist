
import './App.css'
import { useState } from 'react'

interface Todo {
  description: string
}
function App() {

  const [todoDescription, setTodoDescription] = useState('')
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const handleChange = (e: any) => {
    setTodoDescription(e.target.value)
  }

  const handleClick = () => {
    if (todoDescription.trim() === '') return
    if (editingIndex !== null) {

      // Editar
      const updated = [...todoList]
      updated[editingIndex].description = todoDescription
      setTodoList(updated)
      setEditingIndex(null)
    } else {
      const newTodo:Todo ={
        description: todoDescription

      }
      const updated = [newTodo, ...todoList]
      setTodoList(updated)
    }
    setTodoDescription('')
  }

  const startEditing = (index: number) => {
    setEditingIndex(index)
    setTodoDescription(todoList[index].description)
  }

  const cancelEdit = () => {
    setEditingIndex(null)
    setTodoDescription('')
  }

  return (
    <>
    <h1>LAB 5</h1>
      <div id='contenedor'>
        <div>TODOs here:</div>
        <div id='barra'>
          <input
            id='inputbarra'
            type='text'
            value={todoDescription}
            onChange={handleChange}
            placeholder='New task' />
          <button onClick={handleClick}>
            {editingIndex !== null ? 'Actualizar' : 'Agregar'}
          </button>
          {editingIndex !== null && (
          <button onClick={cancelEdit} style={{ marginLeft: 8 }}>
            Cancelar
          </button>
        )}
        </div>

        
        <ul>
          {todoList.map((todo, index) => {
            return <li key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
              paddingLeft: 20,
            }}
            >{todo.description}
            
            <button onClick={() => startEditing(index)} style={{ marginLeft: 5 }}>
              Editar
            </button>

            </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
