<template>
  <div>
    <h2>Adicionar Novo Item</h2>
    <form @submit.prevent="addItem">
      <div>
        <label for="name">Nome do Item:</label>
        <input v-model="itemName" id="name" required />
      </div>
      <button type="submit">Adicionar Item</button>
    </form>
    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const itemName = ref('');

    const addItem = () => {
      const items = JSON.parse(localStorage.getItem('items')) || [];
      items.push({ id: Date.now(), name: itemName.value });
      localStorage.setItem('items', JSON.stringify(items));
      itemName.value = '';
      alert('Item added successfully!');
    };

    return {
      itemName,
      addItem,
    };
  },
};
</script>
