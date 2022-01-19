import { useEffect, useState } from "react";
import axios from "axios";

const useGetTask = () => {
  const [tasks, setTasks] = useState([]);

  const requestTask = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response);
      console.log(response.data);
    } catch (err) {}
  };
  useEffect(() => {
    requestTask();
  }, []);

  return {
    tasks,
  };
};

export default useGetTask;
