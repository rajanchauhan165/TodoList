var completed = JSON.parse(localStorage.getItem("completedtasks"))

completed.map(function(elem,index){
    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = elem.taskItem

    var td2 = document.createElement("td")
    td2.innerText = elem.qtyItem

    var td3 = document.createElement("td")
    td3.innerText = elem.priorItem

    var td4 = document.createElement("td")
    var btn = document.createElement("button")
    btn.innerText = "Delete"
    btn.style.backgroundColor = "red"
    btn.addEventListener("click",function(){
        removeCompleted(elem,index)
    })
    td4.append(btn)

    tr.append(td1,td2,td3,td4)
    document.querySelector("tbody").append(tr)
})

function removeCompleted(elem,index){
    completed.splice(index,1)
    localStorage.setItem("completedtasks",JSON.stringify(completed))
    window.location.reload()
}