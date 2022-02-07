// prevent default handler
let preventDefault = (e) => {
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button, e) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
        })
    })
}
preventDefault();


// glibal variable declaration
let addBtn = document.getElementById('add'),
    deleteBtn = document.getElementById('delete'),
    showBtn = document.getElementById('show'),
    updateBtn = document.getElementById('update'),
    key = document.getElementById('key'),
    valuer = document.getElementById('valuer'),
    tasksPlaceHolder = document.getElementById('tasks'),
    noTaskMsg = document.getElementById('noTaskMsg');

// the cleaner function => empty feilds
let cleaner = ()=>{
    key.value = "";
    valuer.value = "";
}

// add new task handler
let addTask = () => {
    let taskName = key.value, taskValue = valuer.value;
    if (taskName != "" && taskValue != "") {
        localStorage.setItem(taskName, taskValue);
        tasksPlaceHolder.innerHTML = "";
        tasksPlaceHolder.innerHTML += `<p> the task name is : ${taskName} and the task value is : ${taskValue}</p>`
        cleaner()
    } else {
        return;
    }
}


// show all tasks handler
let showTask = () => {
    tasksPlaceHolder.innerHTML = "";
    for (let item = 0; item < localStorage.length; item++) {
        tasksPlaceHolder.innerHTML += `<p> the task name is : ${localStorage.key(item)} and the task value is : ${localStorage.getItem(localStorage.key(item))}</p>`
    }
    localChecker();
}


// delete task handler
let deleteTask = () => {
    let taskName = key.value;
    if (taskName == "") {
        return
    }
    localStorage.removeItem(taskName);
   cleaner();
    tasksPlaceHolder.innerHTML = "";
    showTask();
    localChecker();
}


// update task handler
let updateTask = () => {
    let finder = key.value;
    let task = valuer.value;
    if (finder == "" || task == ""){
        return
    }
    localStorage.setItem(finder, task);
    showTask();
    cleaner();
}


// event listner attachement
addBtn.addEventListener("click", () => addTask());
deleteBtn.addEventListener("click", deleteTask);
showBtn.addEventListener("click", showTask);
updateBtn.addEventListener("click", updateTask);

// no task show message handler
let localChecker = () => {
    if (localStorage.length == 0) {
        tasksPlaceHolder.innerHTML = `<p id="noTaskMsg">No task to show</p>`;
    }
}
localChecker();




