document.addEventListener("DOMContentLoaded", function() {
    var addTaskButton = document.getElementById("addTaskButton");
    addTaskButton.addEventListener("click", addTask);
  });
  
  function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() !== "") {
      var taskItem = document.createElement("li");
      taskItem.className = "taskItem";
      taskItem.textContent = taskInput.value;
      
      var deleteButton = document.createElement("span");
      deleteButton.className = "deleteButton";
      deleteButton.textContent = "❌";
      deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
      };
      
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  