import React, { useContext, useEffect } from "react";
import useGetTasks from "./hooks/useGetTasks";
import AppContext from "./store/AppContext";
import TaskForm from "./components/TaskForm/TaskForm";
import TasksList from "./components/TasksList/TasksList";
import SortItems from "./components/SortItems/SortItems";
import "./App.scss";

const App = () => {
  const { tasks } = useGetTasks();
  const state = useContext(AppContext);

  useEffect(() => {
    state.setTasks(tasks);
  }, [tasks]);

  return (
    <div className="AppContainer">
      <TaskForm />
      <SortItems />
      <TasksList />
    </div>
  );
};

export default App;
