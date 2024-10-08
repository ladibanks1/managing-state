import { useState } from "react";

const TaskItem = ({ task, editTask, deleteTask }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [newTask, setNewTask] = useState({});
  const [done , setDone] = useState(false)

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewTask(task[index]);
  };

  const handleSubmit = (index) => {
    setEditIndex(null);
    editTask(newTask, index);
  };
  const handleDelete = (index) => {
    setEditIndex(null);
    deleteTask(index);
    console.log(index)
  };
  return (
    <div>
      {task.map((item, index) => (
        <section key={index}>
          <p>
            Task:
            {editIndex === index ? (
              <input
                type="text"
                value={newTask.task}
                onChange={(e) =>
                  setNewTask((prev) => ({ ...prev, task: e.target.value }))
                }
              />
            ) : (
              <span>{item.task}</span>
            )}
          </p>
          <p>
            Description:{" "}
            {editIndex === index ? (
              <input
                type="text"
                value={newTask.description}
                onChange={(e) =>
                  setNewTask((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
            ) : (
              <span>{item.description}</span>
            )}
          </p>
          <button
            onClick={() =>{
              editIndex === index ? handleSubmit(index) : handleEdit(index)
            }
            }
          >
            {editIndex === index ? "Save" : "Edit"}
          </button>
          <button
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
          <button
            onClick={() => setDone(!done)}
          >
            {done ? "Done" : "Not Done"}
          </button>
        </section>
      ))}
    </div>
  );
};

export default TaskItem;
