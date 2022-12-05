import logo from './logo.svg';
import './App.css';
import { useState } from "react";

let currentEditingItem = 0;


function App() {

  let [listItems, setListItems] = useState([
    'Apple',
    'Google',
    'Microsoft'
  ]);
  let [showEditForm, setShowEditForm] = useState(false);
  let [itemInput, setItemInput] = useState('');
  let [editInput, setEditInput] = useState('');
  let [editFormClassName, setEditFormClassName] = useState('fadeIn');
  
  function printList() {
    //console.log(listItems.map((item) => item));
    return listItems.map((item, index) =>
      <li key={index}>
        { item }
        <button className="button-clear button-small button-green" onClick={(e) => editItem(index) }>Edit</button>
        <button className="button-clear button-small button-red" onClick={(e) => deleteItem(index) }>Delete</button>
      </li>
    );
  }

  function addItem(event) {
    event.preventDefault();
    if (itemInput == '') return;
    setListItems([...listItems, itemInput]);
    setItemInput('');
  }

  function deleteItem(index) {
    setListItems(listItems.filter((item, i) => i !== index));
  }

  function editItem(index) {
    setShowEditForm(true);
    
    setEditInput(listItems[index]);
    currentEditingItem = index;
    console.log(currentEditingItem);
  }

  function updateItem(event) {
    event.preventDefault();
    let newVal = listItems.slice();
    newVal[currentEditingItem] = editInput;
    setListItems(newVal);
    closeEditForm();
  }

  function closeEditForm() {
    setEditFormClassName('fadeOut');
    setTimeout(()=>{
      setShowEditForm(false);
      setEditFormClassName('fadeIn');
    }, 150);
  }

  function editForm() {
    if (showEditForm) {
      return (
        <form id="edit-form" onSubmit={updateItem} className={editFormClassName}>
          <div id="edit-form-content">
            <label htmlFor="edit-input">Edit Item</label>
            <input type="text" id="edit-input" autoComplete="off" value={editInput} onChange={(e) => setEditInput(e.target.value)}/>
            <button onClick={closeEditForm} type="button">Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      );
    }
    return;
  }

  return (
    <div className="App">
      <main className="container">
        <h1>ListApp</h1>
        <p>Add new items to the list.</p>
        <form id="form" onSubmit={addItem}>
          <label htmlFor="input">New Item</label>
          <input type="text" id="input" autoComplete="off" value={itemInput} onChange={(e) => setItemInput(e.target.value)}/><button type="submit">Submit</button>
        </form>        
        <ul id="list">
          { printList() }
        </ul>        
      </main>
      { editForm() }
    </div>
  );
}

export default App;
