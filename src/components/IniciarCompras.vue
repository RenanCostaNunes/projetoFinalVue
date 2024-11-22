<template>
  <div class="shopping-container">
    <h2 class="title">Iniciar Compras</h2>
    <ul v-if="items.length" class="item-list">
      <li v-for="item in items" :key="item.id" :class="{ checked: item.checked }" class="item">
        <label>
          <input type="checkbox" v-model="item.checked" />
          {{ item.name }} - {{ item.brand }} ({{ item.quantity }} {{ item.unit }})
        </label>
      </li>
    </ul>
    <p v-else class="no-items">Nenhum item na lista de compras.</p>
    <div class="actions" :class="{ 'center-actions': !items.length }">
      <button v-if="items.length" @click="finalizePurchases" class="finalize-button">Finalizar Compras</button>
      <router-link to="/" class="back-button">Voltar</router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const items = ref([]);

    const loadItems = () => {
      const storedItems = JSON.parse(localStorage.getItem('items')) || [];
      items.value = storedItems.map((item) => ({ ...item, checked: false }));
    };

    const finalizePurchases = () => {
      const confirmed = confirm('Tem certeza de que deseja finalizar as compras?');
      if (confirmed) {
        const secondConfirmation = confirm('Esta ação é irreversível. Deseja continuar?');
        if (secondConfirmation) {
          items.value = items.value.filter((item) => !item.checked);
          localStorage.setItem('items', JSON.stringify(items.value));
          alert('Compras finalizadas e itens comprados removidos com sucesso!');
        }
      }
    };

    onMounted(() => {
      loadItems();
    });

    return {
      items,
      finalizePurchases,
    };
  },
};
</script>

<style scoped>
.shopping-container {
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 20px auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.item-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  margin-bottom: 15px;
  border: 1px solid #ccc;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: #fff;
  transition: background-color 0.3s ease;
}

.item.checked {
  background-color: #d4edda;
  border-color: #c3e6cb;
  text-decoration: line-through;
  color: #155724;
}

.no-items {
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-top: 20px;
}

.actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.actions.center-actions {
  justify-content: center;
}

.finalize-button {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.finalize-button:hover {
  background-color: #218838;
}

.back-button {
  text-decoration: none;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #0056b3;
}

label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 1rem;
}

input[type="checkbox"] {
  margin: 0;
}
</style>
