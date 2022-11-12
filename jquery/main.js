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

$('document').ready(() => {

    list = $('#list');
    form = $('#form');
    input = $('#input');
    editForm = $('#edit-form');
    editInput = $('#edit-input');

    loadItems();

    $("#form").submit(function(event){
        event.preventDefault();
        addItem();
    });

    $("#edit-form").submit(function(event){
        event.preventDefault();
    });
});

function loadItems() {
    list.html('');
    listItems.forEach((item, i) => {
        list.append(createLiElement(item, i));
    });
}

function createLiElement(text, index) {
    let li = `<li>${text} 
        <button class="button-clear button-small button-green" onclick="editItem(${index})">Edit</button>
        <button class="button-clear button-small button-red" onclick="deleteItem(${index})">Delete</button>
    </li>`;

    return li;
}

function addItem() {
    if (input.val() == '') return;

    listItems.push(input.val());
    input.val('');

    loadItems();
}

function deleteItem(index) {
    listItems.splice(index, 1);
    loadItems();
}

function editItem(index) {
    requestAnimationFrame(() => {
        editForm.css("display","flex");
        requestAnimationFrame(() => {
            editForm.css("opacity","1");
        });
    });

    editInput.val(listItems[index]);
    currentEditingItem = index;
}

function updateItem() {
    listItems[currentEditingItem] = editInput.val();
    loadItems();
    closeEdit();
}

function closeEdit() {
    editForm.css("opacity","0");
    setTimeout(() => {
        editForm.css("display","none");
        editInput.val('');
    }, 200);
}