import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TodoContext } from './DataContext'

import '../styles/notes.scss'

export default function Notes() {
  const { loading, value, deleteTodo, setTodo } = useContext(TodoContext)
  const data = !loading ? value.docs.map(el => el.data()) : []

  return (
    <div className="todo__notes__wrapper">
      {
        loading ?
        <div>Loading...</div>
        :
        data.length === 0 ?
        <div>There is no todos</div>
        :
        data.map(({id, header, details}) => {
          return (
            <Link
              key={id}
              to='edit-todo' 
              className="todo__note__wrapper"
              data-id={id}
              onClick={e => e.target.closest('button') === null && setTodo({id, header, details})}
            >
              <button
                className="todo__note__complete"
                onClick={deleteTodo}
              >
                <span></span>
                <span></span>
              </button>
              <div className="todo__note__content">
                <div className="todo__note__content__header">
                  {header}
                </div>
                <div className="todo__note__content__text">
                  {details}
                </div>
              </div>
            </Link>
          )
        })
      }
      <Link
        to='add-todo'
        className="todo__notes__add-button"
      >
        +
      </Link>
    </div>
  )
}