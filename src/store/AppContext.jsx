import React, { useState, createContext, useEffect } from "react";
import { v1 as uuid } from "uuid";

const AppContext = createContext();

export const AppContextWrapper = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [sortType, setSortType] = useState("asc");

  useEffect(() => {
    const newTasks = sortTasks(tasks);
    setTasks(newTasks);
    //eslint-disable-next-line
  }, [sortType]);

  const addTask = (taskName) => {
    const newTask = {
      userId: 1,
      id: uuid(),
      title: taskName,
      completed: false,
    };

    const newTasks = [...tasks, newTask];

    const taskWithOrder = sortTasks(newTasks);

    setTasks(taskWithOrder);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const editTaskTitle = (taskId, newTitle) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const sortTasks = (tasksToOrder) => {
    const newTasks = tasksToOrder.map((task) => task);
    if (sortType === "asc") {
      newTasks.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else {
      newTasks.sort((a, b) => (a.title < b.title ? 1 : -1));
    }

    return newTasks;
  };

  const state = {
    tasks,
    setTasks,
    addTask,
    deleteTask,
    editTaskTitle,
    sortType,
    setSortType,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppContext;
