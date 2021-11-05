import { useContext } from "react"
import { useHistory } from "react-router"
import { TodoContext } from "./DataContext"

export default function NewTodo() {
  const { addTodo, todo, setTodo } = useContext(TodoContext)
  const history = useHistory()

  function handleAdd() {
    history.push('/')
    addTodo()
  }

  return (
    <div className="new-todo__wrapper todo-form__wrapper">
      <div className="name__wrapper">
        <label className="name-label">
          Name
        </label>
        <input
          className='name-input'
          type="text"
          placeholder='Enter the name'
          onChange={e => setTodo({...todo, header: e.target.value})}
        />
      </div>
      <div className="details__wrapper">
        <label className="details-label">
          Details
        </label>
        <textarea
          className='details-input'
          placeholder='Enter the details'
          onChange={e => setTodo({...todo, details: e.target.value})}
        ></textarea>
      </div>
      <div className="buttons__wrapper">
        <button
          className="button-save"
          onClick={handleAdd}
          disabled={todo.header.trim() === '' || todo.details.trim() === ''}
        >
          Save
        </button>
      </div>
    </div>
  )
}