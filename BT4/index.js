let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let tbody = document.getElementById("tbody")

const renderData = () => {
    let html = ""
    tasks.forEach((task,index) => {
        html += `<tr>
        <td>${task}</td>
        <td><button type="button" class="btn btn-danger" onclick="deleteTask('${index}')">Xóa</button></td>
      </tr>`
    })
    tbody.innerHTML = html;
}

document.getElementById("addTask").addEventListener("click", function(e){
    e.preventDefault();
    tasks.push(document.getElementById("newTask").value)
    saveToLocalStorage();
    renderData();
})

const saveToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

const deleteTask = (index) => {
    if(confirm("Xác nhận xóa")){
        tasks = tasks.filter((_,position) => position != index)
        saveToLocalStorage()
        renderData();
    }
}
renderData();