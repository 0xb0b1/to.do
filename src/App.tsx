import React from "react";

import "./styles/global.scss";

import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <TaskList />
    </>
  );
}

export default App;
