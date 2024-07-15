// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const taskID = dayjs().valueOf();
    //console.log(taskID);
    return taskID;
}

// Todo: create a function to create a task card
// given a task
function createTaskCard(task) {
    // Create all task card elements
    const taskCard = $('<div>');
    const taskCardHeader = $('<div>');
    const taskCardHeaderTitle = $('<h1>');
    const taskCardBody = $('<div>');
    const taskCardDescription = $('<p>');
    const taskCardDate = $('<p>');
    const taskCardDeleteBtn = $('<a>');

    // Store content in task card
    taskCard.append(taskCardHeader);
    taskCard.append(taskCardBody);

    // Store content in respected sections
    taskCardHeader.append(taskCardHeaderTitle);
    taskCardBody.append(taskCardDescription);
    taskCardBody.append(taskCardDate);
    taskCardBody.append(taskCardDeleteBtn);

    // 
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: 
// when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
   const taskList = 
});