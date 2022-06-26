const tasksInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskAddButton = document.getElementById('tasks__add');
taskAddButton.setAttribute('type', 'button');

function addTask(taskText) {
    let task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `<div class="task__title">
    ${taskText}
    </div>
    <a href="#" class="task__remove">&times;</a>` 
    tasksList.appendChild(task);
    tasksInput.value = '';
    task.lastChild.addEventListener('click', () => {
        task.remove();        
    })    
}

document.addEventListener('keydown', e => {
    if (e.key === 'Enter' & !!tasksInput.value) {
        addTask(tasksInput.value);        
    }
})

taskAddButton.addEventListener('click', () => {
    if (!!tasksInput.value) {
        addTask(tasksInput.value);
    }
})