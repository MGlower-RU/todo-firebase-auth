import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Routing from "./components/Routing";

import './styles/App.scss';

function App() {
  return (
    <div className="page">
      <Router>
        <div className="todo__wrapper">
          <Header />
          <div className="todo__box">
            <Routing />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
