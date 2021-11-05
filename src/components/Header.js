import { useLocation } from "react-router"
import { Link } from "react-router-dom"

export default function Header() {
  const history = useLocation()

  return (
    <div className="todo__header">
      {
        history.pathname !== '/' &&
        <Link to="/"> </Link>
      }
      <h1>Todo</h1>
    </div>
  )
}