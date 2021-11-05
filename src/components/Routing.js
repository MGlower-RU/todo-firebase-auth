import { Switch, Route } from 'react-router-dom';

import EditTodo from './EditTodo';
import NewTodo from './NewTodo';
import Notes from './Notes';

export default function Routing() {
  return (
    <Switch>
      <Route path="/add-todo">
        <NewTodo />
      </Route>
      <Route path="/edit-todo">
        <EditTodo />
      </Route>
      <Route path="/">
        <Notes />
      </Route>
    </Switch>
  )
}