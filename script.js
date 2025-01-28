document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    // Add Task
    addTaskBtn.addEventListener("click", () => {
      const taskValue = taskInput.value.trim();
      if (taskValue) {
        addTaskToList(taskValue);
        taskInput.value = "";
      }
    });
  
    // Add task to the list
    function addTaskToList(taskValue) {
      const li = document.createElement("li");
  
      li.innerHTML = `
        <span class="task-text">${taskValue}</span>
        <div class="actions">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
  
      // Add Edit functionality
      li.querySelector(".edit-btn").addEventListener("click", () => {
        const newTaskValue = prompt("Edit your task:", taskValue);
        if (newTaskValue) {
          li.querySelector(".task-text").textContent = newTaskValue.trim();
        }
      });
  
      // Add Delete functionality
      li.querySelector(".delete-btn").addEventListener("click", () => {
        taskList.removeChild(li);
      });
  
      taskList.appendChild(li);
    }
  });