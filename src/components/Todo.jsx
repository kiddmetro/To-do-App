import { useState } from "react"

const Todo = () => {

    const [todo,setTodo] = useState("")

    const [todos,setTodos] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo("")

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=> setTodo(e.target.value) } value={todo} type="text" />
            <button type="submit">Add</button>
        </form>
        {console.log(todos)}
    </div>
  )
}

export default Todo