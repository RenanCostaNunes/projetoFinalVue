<template>
  <div class="add-item-container">
    <h2 class="title">Adicionar Novo Item</h2>
    <form @submit.prevent="addItem" class="add-item-form">
      <div class="form-group">
        <label for="name" class="form-label">Nome do Item:</label>
        <input v-model="itemName" id="name" class="form-input" required />
      </div>
      <button type="submit" class="submit-button">Adicionar Item</button>
    </form>
    <router-link to="/" class="back-button">Voltar</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(_, { emit }) {
    const itemName = ref('');

    const addItem = () => {
      const items = JSON.parse(localStorage.getItem('items')) || [];
      items.push({ id: Date.now(), name: itemName.value });
      localStorage.setItem('items', JSON.stringify(items));
      itemName.value = '';
      alert('Item adicionado com sucesso!');

      // Redirecionar para a homepage
      window.location = "/"
    };

    return {
      itemName,
      addItem,
    };
  },
};
</script>

<style scoped>
.add-item-container {
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

.add-item-form {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-label {
  font-size: 1rem;
  color: #555;
}

.form-input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
}

.form-input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.submit-button {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
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
  margin-top: 20px;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
