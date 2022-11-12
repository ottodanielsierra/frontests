let listItems = [
    'Apple',
    'Google',
    'Microsoft'
];
let currentEditingItem = 0;

//HTML Elements
let list;
let form;
let input;
let editForm;
let editInput;

document.addEventListener("DOMContentLoaded", () => {
    list = document.getElementById('list');
    form = document.getElementById('form');
    input = document.getElementById('input');
    editForm = document.getElementById('edit-form');
    editInput = document.getElementById('edit-input');

    loadItems();

    form.addEventListener("submit", function(event){
        event.preventDefault();
        addItem();
    });

    editForm.addEventListener("submit", function(event){
        event.preventDefault();
    });
});

function loadItems() {
    list.replaceChildren('');

    listItems.forEach((item, i) => {
        list.appendChild(createLiElement(item, i));
    });
}

function createLiElement(text, index) {
    let li = document.createElement('li');
    li.textContent = text + ' ';

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.setAttribute('class', 'button-clear button-small button-green');
    editButton.setAttribute('onclick', 'editItem('+index+')');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('class', 'button-clear button-small button-red');
    deleteButton.setAttribute('onclick', 'deleteItem('+index+')');
    

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
}

function addItem() {
    if (input.value == '') return;

    listItems.push(input.value);
    input.value = '';

    loadItems();
}

function deleteItem(index) {
    listItems.splice(index, 1);

    loadItems();
}

function editItem(index) {
    requestAnimationFrame(() => {
        editForm.style.display = "flex";
        requestAnimationFrame(() => {
            editForm.style.opacity = "1";
        });
    });    

    editInput.value = listItems[index];
    currentEditingItem = index;
}

function updateItem() {
    listItems[currentEditingItem] = editInput.value;
    list.replaceChildren('');
    loadItems();
    closeEdit();
}

function closeEdit() {
    editForm.style.opacity = "0";
    setTimeout(() => {
        editForm.style.display = "none";
        editInput.value = '';
    }, 200);    
}