// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
// based on time created
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
    taskCardDate.text(task.taskDueDate);
    taskCardDeleteBtn.text('Delete');

    

    /*test to make sure cards work*/
    // taskCard.addClass('bg-light text-black');

    // Add classes to elements
    taskCard.addClass('task-card');
    taskCardHeader.addClass('card-header');
    taskCardBody.addClass('card-body');
    taskCardDescription.addClass('card-text');
    taskCardDate.addClass('card-text');

    // Include that this will be a button
    taskCardDeleteBtn.addClass('btn btn-danger');

    // Input id onto specified card
    taskCard.attr("id", task.id);


    //make draggable 
    taskCard.draggable({
        connectToSortable: ".connectedSortable"
    });

    // Style card depending on status 
    const today = dayjs();
    const due = task.taskDueDate;
    
    if(today.isAfter(dayjs(due))) {
        taskCard.addClass('bg-danger text-white');
        taskCardDeleteBtn.addClass('border-white');
    } else if (dayjs(due).diff(today, 'day') <= 5) {
        taskCard.addClass('bg-warning text-white');
    } else {
        taskCard.addClass('bg-light text-black');
    }

    //bring in lists to append cards to
    const todoList = $('#todo-cards');
    const inProgressList = $('#in-progress-cards');
    const doneList = $('#done-cards');
    
    //ADD TO THE column!
    todoList.append(taskCard);

    // Append to whatever specified column
    // 

    

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

    const toDoListSection = $('#todo-cards');
    const inProgressListSection = $('#in-progress-cards');
    const doneListSection = $('#done-cards');

    ////make them snap with respected column
    toDoListSection.addClass('connectedSortable');
    inProgressListSection.addClass('.connectedSortable');
    doneListSection.addClass('.connectedSortable');

    for (let i = 0; i < nextId.length; i++) {
        const taskId = nextId[i];
        const taskItem = taskList.find(function(element) {
            return element.id === taskId;
        });
        createTaskCard(taskItem);
    }
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

    // Create variables for input fields
    const taskTitle = $('#taskTitle').val();
    const dayChose = $('#datepicker').val();
    const taskDueDate = dayjs(dayChose).format('MM/DD/YYYY');
    const taskDescription = $('#comment-input').val();

    // Check for missing field, if no error:
    //      -create obj
    //      -push obj and id onto the arrays
    //      -set/save local storage and stringify
    //keeping taskDueDate empty does actually insert the string 'Invalid Date' 
    if((taskTitle == '') || (taskDueDate == 'Invalid Date') || (taskDescription == '')) {
        let modalFooter = $('#errorMessage');
        modalFooter.html('');
        modalFooter.append('There is a missing field');
        
    } else {
        const modalFooter = $('#errorMessage');
        modalFooter.html('');

        const task = { 
            taskTitle: taskTitle,
            taskDueDate: taskDueDate,
            taskDescription: taskDescription,
            id: generateTaskId(),
            //lets default them to the todo-list section
            section: 'todo-list'
        };
        
        // Once card is filled out and object is created, push onto taskList & nextID array
        taskList.push(task);
        nextId.push(task.id);

        // After storing new object in array, lets set the local storage 
        localStorage.setItem('tasks', JSON.stringify(taskList));
        localStorage.setItem('nextId', JSON.stringify(nextId));

        //now lets add the task new card to the screen
        createTaskCard(task);

        // This serves as closing the modal after creating the card
        $('#formModal').modal('hide');

        // Reset the form after it has added info into local storage and created card
        document.modalInput.reset();

    }
    
    
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    // this is going to change the task.section depending where ever dropped
}

// Todo: 
// when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

    //Check if local storage is available to take from or empty, if empty create its array
    // grabs from global variable
    taskList = taskList || [];
    nextId = nextId || [];
   

    renderTaskList();

    const createTaskCard = $('#formModal');
    createTaskCard.on('click','.addTask',handleAddTask);

    $( "#datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true
      });

      $("#todo-cards,#in-progress-cards,#done-cards").sortable({
        connectWith:".connectedSortable"
        //update:handleDrop
    });

});