"use strict";

var listElement = document.querySelector('.list');

// console.log(listElement);
// console.dir(listElement);
// console.log(listElement.children);
// console.log(listElement.firstChild);
// console.log(listElement.firstElementChild);
// console.log(listElement.parentElement);

var itemElementList = listElement.children;
// itemElementList = document.querySelectorAll('.list__item');
// itemElementList = document.querySelectorAll('.list .list__item');

var todoList = [
    {
        name: 'Позвонить в сервис',
        status: 'todo'
    },
    {
        name: 'Купить хлеб',
        status: 'done'
    },
    {
        name: 'Захватить мир',
        status: 'todo'
    },
    {
        name: 'Добавить тудушку в список',
        status: 'done'
    }
];

var templateElement = document.getElementById('todoTemplate');
var templateContainer = 'content' in templateElement ? templateElement.content : templateElement;

function addTodoFromTemplate(todo) {
    var newElement = templateContainer.querySelector('.task').cloneNode(true);
    newElement.querySelector('.task__name').textContent = todo.name;
    
    if (todo.status === 'todo') {
        newElement.classList.add('task_todo');
        newElement.classList.remove('task_done');
    } else {
        newElement.classList.add('task_done');
        newElement.classList.remove('task_todo');
    }
    
    return newElement;
}

todoList
    .map(addTodoFromTemplate)
    .forEach(function (element) {
        listElement.appendChild(element);
    });

// добавим клик по todo:
var statusBtns = listElement.querySelectorAll('.task__status');

for (var i = 0; i < statusBtns.length; i++) {
    var statusBtn = statusBtns[i];

    statusBtn.addEventListener('click', onStatusBtnClick);
}

function onStatusBtnClick (event) {
    var currentTask = event.target.parentNode;

    // if (currentTask.classList.contains('task_todo')) {
    //     currentTask.classList.remove('task_todo');
    //     currentTask.classList.add('task_done');
    // } else {
    //     currentTask.classList.add('task_todo');
    //     currentTask.classList.remove('task_done');
    // }

    var isTodo = currentTask.classList.contains('task_todo');
    currentTask.classList.toggle('task_todo', !isTodo);
    currentTask.classList.toggle('task_done', isTodo);
}