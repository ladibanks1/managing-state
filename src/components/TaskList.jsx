import React from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import useLocalStorage from "../hooks/useLocalStorage";

const TaskList = () => {
  const [task, setTask , editTask , deleteTask] = useLocalStorage();
  return (
    <div>
      <h1>YOUR TASKS</h1>
      <TaskItem task={task} editTask={editTask} deleteTask={deleteTask} />
      <TaskForm setData={setTask} />
    </div>
  );
};

export default TaskList;
