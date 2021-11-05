import { useContext } from "react"
import { useHistory } from "react-router"
import { TodoContext } from "./DataContext"

export default function EditTodo() {
  const {
    todo,
    setTodo,
    deleteTodo,
    editTodo
  } = useContext(TodoContext)
  const history = useHistory()

  function handleDelete() {
    history.push('/')
    deleteTodo(todo.id)
  }

  function handleEdit() {
    history.push('/')
    editTodo()
  }

  return (
    <div className="edit-todo__wrapper todo-form__wrapper">
      <div className="name__wrapper">
        <label className="name-label">
          Name
        </label>
        <input
          className='name-input'
          type="text"
          onChange={e => setTodo({...todo, header: e.target.value})}
          value={todo.header}
        />
      </div>
      <div className="details__wrapper">
        <label className="details-label">
          Details
        </label>
        <textarea
          className='details-input'
          onChange={e => setTodo({...todo, details: e.target.value})}
          value={todo.details}
        ></textarea>
      </div>
      <div className="buttons__wrapper">
        <button
          className="button-save"
          onClick={handleEdit}
        >
          Save
        </button>
        <button
          className="button-delete"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}