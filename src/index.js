document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description")
    const taskDescription = taskInput.value;

    buildToDo(taskDescription);
  });
  

  function buildToDo(task) {
    const newLi = document.createElement("li");
    newLi.textContent = task;

    const taskList = document.getElementById("tasks");
    taskList.append(newLi);
  }
});
