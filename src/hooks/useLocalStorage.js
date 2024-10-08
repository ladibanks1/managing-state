import { useState, useEffect } from "react";

const useLocalStorage = () => {
  // Retrieve data from localStorage safely with error handling
  const getStoredData = () => {
    try {
      const storedData = localStorage.getItem("tasks");
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error("Error reading tasks from localStorage", error);
      return [];
    }
  };

  // Initialize the state with the stored data or default to an empty array
  const [tasks, setTasks] = useState(getStoredData);

  // Function to add a new task
  const setData = (value) => {
    setTasks((prev) => [...prev, value]);
  };
  const editData = (value , index) => {
    setTasks(prev => {
      prev[index] = value;
      return [...prev];
    });
  }
  const deleteData = (index) => {
    setTasks(prev => {
      prev.splice(index, 1);
      localStorage.setItem("tasks" , JSON.stringify(prev));
      return [...prev];
    });
  };

  // Effect to update localStorage whenever tasks change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return [tasks, setData , editData , deleteData];
};

export default useLocalStorage;