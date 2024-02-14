"strict mode"

// let addScreen = document.getElementById("addScreen");
// let callAddTaskWindow = document.getElementById("callAddTaskWindow");
// let closeWindowHeader = document.getElementById("closeWindowHeader");

// let addTask = document.getElementById("addTask");
// let allTasks = document.getElementById("allTasks");

// callAddTaskWindow.onclick = function(){
//     addScreen.style.display = "flex";
// }

// closeAddTaskWindow.onclick = function(){
//     addScreen.style.display = "none";
// }


// window.onclick = function(event) {
//     if (event.target == addScreen) {
//         addScreen.style.display = "none";
//     }
// }




let inputTask = document.getElementById("inputTask");
let taskList = document.getElementById("allTasks");

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("removeTask")) {
        let listItem = event.target.closest('.task');
        listItem.remove();
    }
});


taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("checkTask")) {
        let listItem = event.target.closest('.task');
        listItem.remove();
    }
});




function addTask(){
    let newTask = inputTask.value;
    if(newTask.trim() !== ""){
        let newTaskElement = document.createElement("li");
        
        newTaskElement.className = "task";
        

        let textTaskElement = document.createElement("p");
        textTaskElement.textContent = newTask;

        let checkRemoveBoxElement = document.createElement("div");
        let checkTaskElement = document.createElement("button");
        let removeTaskElement = document.createElement("button");




        checkTaskElement.className = "checkTask";
        removeTaskElement.className = "removeTask";
        checkRemoveBoxElement.className = "checkRemoveBox";

        newTaskElement.appendChild(textTaskElement);
        
        checkRemoveBoxElement.appendChild(checkTaskElement); 
        checkRemoveBoxElement.appendChild(removeTaskElement);   

        newTaskElement.appendChild(checkRemoveBoxElement);

    
        
        allTasks.appendChild(newTaskElement);

        inputTask.value = "";
    }
}



function handleKeyPress(event) {
    if (event.keyCode === 13) { 
      addTask();
    }
  }
  
inputTask.addEventListener("keypress", handleKeyPress);




let checkAllTasks = document.getElementsByClassName("checkAllTasks");
let removeAllTasks = document.getElementsByClassName("removeAllTasks");




taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("removeAllTasks")) {
        let allTasks = taskList.children();
        for(i in allTasks){
            i.remove();
        }
        // allTasks.remove()
        // event.target.closest('.task');
        // listItem.remove();
    }
});


// taskList.addEventListener("click", function(event) {
//     if (event.target.classList.contains("checAllkTasks")) {
//         let listItem = event.target.closest('.task');
//         listItem.remove();
//     }
// });

