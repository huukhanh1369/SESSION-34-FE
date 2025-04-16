let employee = JSON.parse(localStorage.getItem("employee")) || [];
const tbody = document.getElementById("tbody")

const renderData = () => {
    let html = ""
    employee.forEach((item, index) => {
        html += `<tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.position}</td>
      </tr>`
    })
    tbody.innerHTML = html
}
renderData();

document.getElementById("addEmp").addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;

    employee.push({name, position})
    localStorage.setItem("employee",JSON.stringify(employee));

    renderData();
})