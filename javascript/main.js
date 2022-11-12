let listItems = [
    'Apple',
    'Google',
    'Microsoft'
];
let currentEditingItem = 0;

function loadItems() {
    let list = document.getElementById('list');
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
    editButton.addEventListener('click', (event) => editItem(event, index));

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('class', 'button-clear button-small button-red');
    deleteButton.setAttribute('onclick', 'deleteItem('+index+')');
    

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
}

function addItem() {
    let text = document.getElementById('input').value;
    if (text == '') return;

    document.getElementById('input').value = '';
    listItems.push(text);

    list.replaceChildren('');
    loadItems();
}

function deleteItem(index) {
    listItems.splice(index, 1);

    let list = document.getElementById('list');
    list.replaceChildren('');
    loadItems();
}

function editItem(event, index) {
    //console.log(event, index);
    let form = document.getElementById('edit-form');
    form.style.display = "flex";

    let editInput = document.getElementById('edit-input');
    editInput.value = listItems[index];
    currentEditingItem = index;
}

function updateItem() {
    let editInput = document.getElementById('edit-input');
    listItems[currentEditingItem] = editInput.value;
    list.replaceChildren('');
    loadItems();
    closeEdit();
}

function closeEdit() {
    let form = document.getElementById('edit-form');
    form.style.display = "none";
    let editInput = document.getElementById('edit-input');
    editInput.value = '';
}

document.addEventListener("DOMContentLoaded", () => {
    loadItems();

    document.getElementById("form").addEventListener("submit", function(event){
        event.preventDefault();
        addItem();
    });

    document.getElementById("edit-form").addEventListener("submit", function(event){
        event.preventDefault();
    });
});
