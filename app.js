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

var todo = 'Добавить тудушку в список';

var newItemElement = document.createElement('li');
newItemElement.classList.add('list__item', 'task', 'task_todo');
// newItemElement.innerHTML = todo;
// newItemElement.textContent = todo;

var htmlToAdd = '<div class="task__status task__status_todo"></div>' +
    '<span class="task__name">' + todo + '</span>' +
    '<div class="task__delete-button">❌</div>';

newItemElement.innerHTML = htmlToAdd;

// / listElement.appendChild(newItemElement);
// console.log(listElement.children);

listElement.insertBefore(newItemElement, listElement.firstChild);
console.log(listElement.children);