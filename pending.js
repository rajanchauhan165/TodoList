var todoItems = JSON.parse(localStorage.getItem("todoData"))

var completed = JSON.parse(localStorage.getItem("completedtasks")) || [];

todoItems.map(function (elem,index){
    var tr = document.createElement("tr")


    var td1 = document.createElement("td")
    td1.innerText = elem.taskItem

    var td2 = document.createElement("td")
    td2.innerText = elem.qtyItem

    var td3 = document.createElement("td")
    td3.innerText = elem.priorItem

    var td4 = document.createElement("td")
    var btn = document.createElement("button")
    btn.innerText = "Mark as Completed"
    td4.addEventListener("click", function (){
        markcompletefunction(elem,index)
    })
    td4.append(btn)

    tr.append(td1,td2,td3,td4)

    document.querySelector("tbody").append(tr)
})

function markcompletefunction(elem,index){
    completed.push(elem)

    localStorage.setItem("completedtasks", JSON.stringify(completed))

    todoItems.splice(index,1)
    localStorage.setItem("todoData",JSON.stringify(todoItems))
    window.location.reload()
}