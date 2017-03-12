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
    'Позвонить в сервис',
    'Купить хлеб',
    'Захватить мир',
    'Добавить тудушку в список'
];


// функция по генерации элементов
function addTodo(name) {
    var htmlToAdd = '<div class="task__status task__status_todo"></div>' +
        '<span class="task__name">' + name + '</span>' +
        '<div class="task__delete-button">❌</div>';

    var newItemElement = document.createElement('li');
    newItemElement.classList.add('list__item', 'task', 'task_todo');
    newItemElement.innerHTML = htmlToAdd;
    return newItemElement;
}

todoList
    .map(addTodo)
    .forEach(function (element) {
        listElement.appendChild(element);
    });

var templateElement = document.getElementById('todoTemplate');
var templateContainer = 'content' in templateElement ? templateElement.content : templateElement;

function addTodoFromTemplate(name) {
    var newElement = templateContainer.querySelector('.task').cloneNode(true);
    newElement.querySelector('.task__name').textContent = name;
    return newElement;
}

todoList
    .map(addTodoFromTemplate)
    .forEach(function (element) {
        listElement.appendChild(element);
    });
