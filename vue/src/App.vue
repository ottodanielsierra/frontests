<script>
export default{
  data() {
    return {
      itemInput: '',
      editInput: '',
      currentEditingItem: 0,
      showEditForm: false,
      listItems: [
        'Apple',
        'Google',
        'Microsoft'
      ]
    }
  },
  methods: {
    addItem() {
      if (this.itemInput == '') return;

      this.listItems.push(this.itemInput);
      this.itemInput = '';
    },
    deleteItem(index) {
      this.listItems.splice(index, 1);
    },
    editItem(index) {
      this.showEditForm = true;
      
      this.editInput = this.listItems[index];
      this.currentEditingItem = index;
    },
    updateItem() {
      this.listItems[this.currentEditingItem] = this.editInput;
      this.closeEdit();
    },
    closeEdit() {
      this.showEditForm = false;
    }
  }
}
</script>

<template>
  <main class="container">
      <h1>ListApp</h1>
      <p>Add new items to the list.</p>
      <form id="form" @submit.prevent="addItem">
          <label for="input">New Item</label>
          <input type="text" id="input" autocomplete="off" v-model="itemInput">
          <button type="submit">Submit</button>
      </form>
      
      <ul id="list">
        <!-- ITEMS -->
        <li v-for="(item, index) in listItems">
          {{ item }}
          <button class="button-clear button-small button-green" @click="editItem(index)">Edit</button>
          <button class="button-clear button-small button-red" @click="deleteItem(index)">Delete</button>
        </li>
      </ul>
  </main>
  <Transition name="fade">
    <form id="edit-form" v-if="showEditForm">
      <div id="edit-form-content">
        <label for="edit-input">Edit Item</label>
        <input type="text" id="edit-input" autocomplete="off" v-model="editInput">
        <button @click="closeEdit()" type="button">Cancel</button>
        <button @click.prevent="updateItem()" type="submit">Save</button>
      </div>
    </form>
  </Transition>  
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>