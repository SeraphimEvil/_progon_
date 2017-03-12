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
    setTodoStatusClassName(newElement, todo.status === 'todo');

    // newElement.querySelector('.task__status').addEventListener('click', onStatusBtnClick);
    // newElement.querySelector('.task__delete-button').addEventListener('click', onDeleteBtnClick);
    return newElement;
}

function onStatusBtnClick (event) {
    var currentTodo = event.target.parentNode;
    var isTodo = currentTodo.classList.contains('task_todo');
    setTodoStatusClassName(currentTodo, !isTodo);
}

function onDeleteBtnClick(event) {
    var currentTodo = event.target.parentNode;
    listElement.removeChild(currentTodo);
}

function setTodoStatusClassName(todo, flag) {
    todo.classList.toggle('task_todo', flag);
    todo.classList.toggle('task_done', !flag);
}

todoList
    .map(addTodoFromTemplate)
    .forEach(function (element) {
        listElement.appendChild(element);
    });

listElement.addEventListener('click', onListClick);

function onListClick(event) {
    console.log('--- event.target', event.target);
    var target = event.target;
    var element;

    if (isStatusBtn(target)) {
        element = target.parentNode;
        changeTodoStatus(element);
    }

    if (isDeleteBtn(target)) {
        element = target.parentNode;
        deleteTodo(element);
    }
}

function isStatusBtn(target) {
    return target.classList.contains('task__status');
}

function isDeleteBtn(target) {
    return target.classList.contains('task__delete-button');
}

function changeTodoStatus(element) {
    var isTodo = element.classList.contains('task_todo');
    setTodoStatusClassName(element, !isTodo);
}

function deleteTodo(element) {
    listElement.removeChild(element);
}

var inputElement = document.querySelector('.add-task__input');
inputElement.addEventListener('keydown', onInputKeydown);

function onInputKeydown(event) {
    console.log('--- event.keyCode', event.keyCode);

    var ENTER_KEYCODE = 13;
    if (event.keyCode !== ENTER_KEYCODE) {
        return;
    }
    // значит кликнули
    console.log('--- inputElement.value', inputElement.value);
}