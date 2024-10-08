import React, { useRef } from "react";

const TaskForm = ({ setData }) => {
  const desRef = useRef("");
  const taskRef = useRef("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setData({
            task: taskRef.current.value,
            description: desRef.current.value,
          });
        }}
      >
        <input type="text" ref={taskRef} placeholder="Add Task" required />

        <input type="text" ref={desRef} placeholder="description" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
