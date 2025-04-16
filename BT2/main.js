let tasks = JSON.parse(localStorage.getItem('tasks')) || [
    {
      id: 1,
      content: 'Learn Javascript Session 01',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Anh Bách',
    },
    {
      id: 2,
      content: 'Learn Javascript Session 2',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Lâm th',
    },
    {
      id: 3,
      content: 'Learn CSS Session 1',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Hiếu Cí ớt ớt',
    },
  ];
  
  let editingId = null;
  
  const form = document.getElementById('task-form');
  const taskList = document.getElementById('task-list');
  
  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${task.content}</td>
        <td>${task.dueDate}</td>
        <td>${task.status}</td>
        <td>${task.assignedTo}</td>
        <td>
          <button class="edit" onclick="editTask(${task.id})">Sửa</button>
          <button class="delete" onclick="deleteTask(${task.id})">Xóa</button>
        </td>
      `;
      taskList.appendChild(row);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  form.onsubmit = function (e) {
    e.preventDefault();
    const content = document.getElementById('content').value;
    const dueDate = document.getElementById('dueDate').value;
    const status = document.getElementById('status').value;
    const assignedTo = document.getElementById('assignedTo').value;
  
    if (editingId) {
      const task = tasks.find(t => t.id === editingId);
      task.content = content;
      task.dueDate = dueDate;
      task.status = status;
      task.assignedTo = assignedTo;
      editingId = null;
    } else {
      const newTask = {
        id: Date.now(),
        content,
        dueDate,
        status,
        assignedTo,
      };
      tasks.push(newTask);
    }
  
    form.reset();
    renderTasks();
  };
  
  function editTask(id) {
    const task = tasks.find(t => t.id === id);
    document.getElementById('content').value = task.content;
    document.getElementById('dueDate').value = task.dueDate;
    document.getElementById('status').value = task.status;
    document.getElementById('assignedTo').value = task.assignedTo;
    editingId = id;
  }
  
  function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
  }
  
  renderTasks();

  
