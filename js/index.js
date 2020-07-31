//define ui
const form = document.querySelector("#task-form");
const tasklist = document.querySelector('.list-group-flush');
const clearbtn = document.querySelector('.Clear')
const filter = document.querySelector('#filter')
const task = document.querySelector('#task')

//load all eventlistners
loadEventListeners();

//loadEventListeners

function loadEventListeners() {
  form.addEventListener("submit", addTask);
  //remove task

  //DOM LoAD event
  document.addEventListener("DOMContentLoaded", getTasks)
  tasklist.addEventListener("click", removeTask);
  //clear tasklist
  clearbtn.addEventListener("click", clearTasks)
}


//get tasks from ls

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks")===null) {
    tasks=[];
  }else {
    tasks= JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    //create li element

    const li = document.createElement("li")

    //add class name

    li.className="list-group-flush"

    //create text node and append

    li.appendChild(document.createTextNode(task));

    //create new link element

    const link = document.createElement("a")

    //add class
  link.className=" ml-5 fa fa-remove"


  //append link to li

  li.appendChild(link);

  //store in ls
  storeTaskInLocalStorage(task);

  //append li to ui
  tasklist.appendChild(li);

});
}
//addTask

function addTask(e) {

  if(task.value===""){
    alert("add a task")
  }

  //create li element

  const li = document.createElement("li")

  //add class name

  li.className="list-group-flush"

  //create text node and append

  li.appendChild(document.createTextNode(task.value));

  //create new link element

  const link = document.createElement("a")

  //add class
link.className=" ml-5 fa fa-remove"

//add icon
//link.innerHTML =  '<i class="fa fa-remove"></i>'

//append link to li

li.appendChild(link);

//store in ls
storeTaskInLocalStorage(task.value);

//append li to ui
tasklist.appendChild(li);

// clear input

  e.preventDefault();
}

//store task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks")===null) {
    tasks=[];
  }else {
    tasks= JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//remove task
function removeTask(e) {
  console.log("hello");
// if (confirm("Are you sure?")) {
//    e.target.parentElement.remove("fa fa-remove")

   //remove from ls
   removeTaskFromLocalStorage(e.target.parentElement );
 //}
}
//remove from ls
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks")===null) {
    tasks=[];
  }else {
    tasks= JSON.parse(localStorage.getItem("tasks"));
     }
tasks.forEach(function (task, index) {
  if (taskItem.textContent ===task) {
    tasks.splice(index,1)
  }
});
localStorage.setItem("tasks", JSON.stringify(tasks));
}


function clearTasks() {
  tasklist.innerHTML="";

//clear tasks
 clearTasksFromLocalStorage();

 }
 function clearTasksFromLocalStorage() {
   localStorage.clear();
 }
