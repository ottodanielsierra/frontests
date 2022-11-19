<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <main class="container">
      <h1>ListApp</h1>
      <p>Add new items to the list.</p>
      <form id="form">
          <label for="input">New Item</label>
          <input type="text" id="input" autocomplete="off"><button onclick="addItem()" type="submit">Submit</button>
      </form>
      
      <ul id="list">
          <!-- ITEMS -->
      </ul>
  </main>
  <form id="edit-form">
      <div id="edit-form-content">
          <label for="edit-input">Edit Item</label>
          <input type="text" id="edit-input" autocomplete="off">
          <button onclick="closeEdit()" type="button">Cancel</button>
          <button onclick="updateItem()" type="submit">Save</button>
      </div>
  </form>
</template>

<style scoped>

</style>
