<template>
  <div class="items-container">
    <h2 class="title">Lista de Itens</h2>
    <ul class="item-list" v-if="items.length">
      <li class="item" v-for="item in items" :key="item.id">
        {{ item.name }}
        <button class="delete-button" @click="deleteItem(item.id)">Apagar</button>
      </li>
    </ul>
    <p v-else class="no-items-message">Sem itens adicionados.</p>
    <router-link to="/" class="back-button">Voltar</router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const items = ref([]);

    const loadItems = () => {
      items.value = JSON.parse(localStorage.getItem('items')) || [];
    };

    const deleteItem = (id) => {
      // Adicionar confirmação antes de deletar
      const confirmed = window.confirm('Tem certeza que deseja apagar este item?');
      if (confirmed) {
        items.value = items.value.filter((item) => item.id !== id);
        localStorage.setItem('items', JSON.stringify(items.value));
        alert('Item apagado com sucesso!');
      }
    };

    onMounted(() => {
      loadItems();
    });

    return {
      items,
      deleteItem,
    };
  },
};
</script>

<style scoped>
.items-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.item-list {
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 1rem;
}

.delete-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #c0392b;
}

.no-items-message {
  font-size: 1.2rem;
  color: #666;
  margin: 20px 0;
}

.back-button {
  text-decoration: none;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
