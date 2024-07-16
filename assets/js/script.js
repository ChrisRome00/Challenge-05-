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

    // Store content in respected sections of the task card
    taskCardHeader.append(taskCardHeaderTitle);
    taskCardBody.append(taskCardDescription);
    taskCardBody.append(taskCardDate);
    taskCardBody.append(taskCardDeleteBtn);

    // Add information to cards
    taskCardHeaderTitle.text(task.taskTitle);
    taskCardDescription.text(task.taskDescription);
    taskCardDate.text(task.date);
    taskCardDeleteBtn.text('Delete');

    /* Style card depending on status */
    const today = dayjs();
    const due = task.taskDueDate;


    if (today.isAfter(dayjs(due)) )

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {


    const toDoListSection = $('#todo-cards');
    const inProgressListSection = $('#in-progress-cards');
    const doneListSection = $('#done-cards');

    //make them
    toDoListSection.addClass('connectedSortable h-100');
    inProgressListSection.addClass('connectedSortable h-100');
    doneListSection.addClass('connectedSortable h-100');


}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

    const taskTitle = $('#taskTitle').val();
    const dayChose = $('#datepicker').val()
    const taskDueDate = dayjs(dayChose).format('MM/DD/YYYY');
    
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

    //Check if local storage is available to take from or empty, if empty create its array
    taskList = taskList || [];
    nextId = nextId || [];
   
    renderTaskList();

    $( "#datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true
      });


});