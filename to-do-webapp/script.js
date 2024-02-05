function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.innerHTML = taskInput.value + '<button class="delete" onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
  
  function deleteTask(element) {
    element.parentNode.remove();
  }
  