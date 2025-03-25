let taskStack = [];
 // Function to add a task to the stack
 function addTask() {
    const taskInput = document.getElementById("task_input");
    const taskName = taskInput.value.trim();
    // Ensure the task name is not empty
    if (taskName !== "") {
        taskStack.push(taskName);  // Add task to the stack
        taskInput.value = "";  // Clear input field
        updatePipeline();  // Update the displayed pipeline
    } else {
        alert("Please enter a task name.");
    }
 }
 // Function to undo the most recent task (pop from the stack)
 function undoTask() {
    if (taskStack.length > 0) {
        taskStack.pop();  // Remove the most recent task
        updatePipeline();  // Update the displayed pipeline
    } else {
        alert("No tasks to undo.");
    }
 }
 // Function to update the pipeline display
 function updatePipeline() {
    const taskList = document.getElementById("task_list");
    taskList.innerHTML = "";  // Clear current list
    // Add each task from the stack to the display
    taskStack.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
 }

