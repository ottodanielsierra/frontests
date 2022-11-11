let listItems = [
    'Apple',
    'Google',
    'Microsoft'
];

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

    let list = document.getElementById('list');
    list.appendChild(createLiElement(text));
}

function deleteItem(index) {
    listItems.splice(index, 1);

    let list = document.getElementById('list');
    list.replaceChildren('');
    loadItems();
}

function editItem(event, test) {
    console.log(event, test);
    let editInput = document.getElementById('edit-input');
    editInput.value = 'perri';
}

function updateItem() {
    
}

document.addEventListener("DOMContentLoaded", () => {
    loadItems();

    document.getElementById("form").addEventListener("submit", function(event){
        event.preventDefault();
        addItem();
    });
});
