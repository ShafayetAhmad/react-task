import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskStatus, setNewTaskStatus] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  const handleAddTask = () => {
    if (newTaskName.trim() !== "" && newTaskStatus.trim() !== "") {
      const newTask = { name: newTaskName, status: newTaskStatus };
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, newTask];
        updatedTasks.sort((a, b) => {
          const statusOrder = { active: 1, completed: 2 };
          const statusA = statusOrder[a.status] || 3;
          const statusB = statusOrder[b.status] || 3;
          return statusA - statusB;
        });
        return updatedTasks;
      });

      setNewTaskName("");
      setNewTaskStatus("");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6">
          <form className="row gy-2 gx-3 align-items-center mb-4">
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                value={newTaskStatus}
                onChange={(e) => setNewTaskStatus(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddTask}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
              {show === "all" &&
                tasks.map((task, key) => (
                  <tr key={key}>
                    <td>{task.name}</td>
                    <td>{task.status}</td>
                  </tr>
                ))}
              {show === "active" &&
                tasks.map(
                  (task, key) =>
                    task.status.toLowerCase() === "active" && (
                      <tr key={key}>
                        <td>{task.name}</td>
                        <td>{task.status}</td>
                      </tr>
                    )
                )}
              {show === "completed" &&
                tasks.map(
                  (task, key) =>
                    task.status.toLowerCase() === "completed" && (
                      <tr key={key}>
                        <td>{task.name}</td>
                        <td>{task.status}</td>
                      </tr>
                    )
                )}
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
