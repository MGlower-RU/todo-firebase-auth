import React, { createContext, useState } from 'react';
import { initializeApp } from "firebase/app";
import { collection, getFirestore, doc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';
import { nanoid } from 'nanoid'

const firebaseConfig = {
  apiKey: "AIzaSyBFxMxOrKMmbVQ0gu-aOXja1LebYPW1Qo0",
  authDomain: "todo-d7596.firebaseapp.com",
  projectId: "todo-d7596",
  storageBucket: "todo-d7596.appspot.com",
  messagingSenderId: "466916862148",
  appId: "1:466916862148:web:91e371d2a889bcac16c191"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const TodoContext = createContext();

export default function DataContext(props) {
  const [todo, setTodo] = useState({
    id: '',
    header: '',
    details: ''
  })

  const [value, loading] = useCollection(
    collection(db, 'todos'),
    {snapshotListenOptions: { includeMetadataChanges: true }}
  );

  async function addTodo() {
    const id = nanoid()

    if(todo.header.trim() !== '' && todo.details.trim() !== '') {
      await setDoc(doc(db, "todos", id), {
        id,
        header: todo.header,
        details: todo.details,
      })
      setTodo({id: '', header: '', details: ''})
    }
  }

  async function deleteTodo(e) {
    if(typeof e === 'object') {
      e.preventDefault()
      const id = e.target.closest('a[class$="__wrapper"]').dataset.id
      await deleteDoc(doc(db, "todos", id));
    } else if(typeof e === 'string' && e !== '') {
      await deleteDoc(doc(db, "todos", e));
    }
  }

  async function editTodo() {
    if(todo.id !== '' && todo.id !== undefined)
    await updateDoc(doc(db, "todos", todo.id), {
      header: todo.header,
      details: todo.details,
      id: todo.id
    });
  }

  return (
    <TodoContext.Provider value={{value, loading, todo, setTodo, addTodo, deleteTodo, editTodo}}>
      {props.children}
    </TodoContext.Provider>
  )
}