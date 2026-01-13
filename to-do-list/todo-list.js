

document.addEventListener('DOMContentLoaded', () => {

    const addBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


    function addTask() {

        const taskText = taskInput.value.trim();

        if (taskText == "") {

            alert('enter the task')


        }
        else {
            const listTask = document.createElement('li');
            listTask.textContent = taskText;

            const removeButton = document.createElement("button");
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            removeButton.addEventListener('click', () => {
                listTask.remove(taskList);
            })

            // removeButton.onclick = function () {
            //     listTask.remove(taskList);
            // }

            listTask.append(removeButton);

            taskList.append(listTask);

            taskInput.value = '';


        }

    }

    addBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    })


})

