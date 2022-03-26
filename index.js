document.querySelector("form").addEventListener("submit",addtask)

var todoList = JSON.parse(localStorage.getItem("todoData")) || [];
function addtask(){
    event.preventDefault()

    var task = document.querySelector("#task").value
    var qty = document.querySelector("#qty").value
    var priority = document.querySelector("#prior").value

    var tasksObj = {
        taskItem: task,
        qtyItem: qty,
        priorItem: priority
    };
    todoList.push(tasksObj);
    localStorage.setItem("todoData",JSON.stringify(todoList))
    document.getElementById("mac").innerText = "Task added successfully."
    document.querySelector("#task").value = "";
    document.querySelector("#qty").value = "";
    document.querySelector("#prior").value = "--";
    // console.log();
}