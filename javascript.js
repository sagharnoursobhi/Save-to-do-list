var addButton=document.getElementById("add-button");
addButton.addEventListener("click",addToDoButton);
function addToDoButton() {
    
}
var clearButton=document.getElementById("clear-completed-button");
clearButton.addEventListener("click",clearToDoButton);
function clearToDoButton() {
    alert("clear button clicked!");
}
var emptyButton=document.getElementById("empty-button");
emptyButton.addEventListener("click",emptyToDoButton);
function emptyToDoButton() {
    alert("empty button clicked!");
}
var emptyButton=document.getElementById("save-button");
emptyButton.addEventListener("click",saveToDoButton);
function saveToDoButton() {
    alert("save button clicked!");
}
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");
function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}
function addToDoButton (){
var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}
function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}
function emptyToDoButton() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}
var myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);
//This will alert "something to store"
var toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};
function saveToDoButton() {
    var toDos = [];
    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}
function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}
loadList();
