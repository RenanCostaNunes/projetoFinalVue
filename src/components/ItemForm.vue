<template>
  <div class="add-item-container">
    <h2 class="title">Adicionar Novo Item</h2>
    <form @submit.prevent="addItem" class="add-item-form">
      <div class="form-group">
        <label for="name" class="form-label">Nome do Item:</label>
        <input v-model="itemName" id="name" class="form-input" required />
      </div>

      <div class="form-group">
        <label for="brand" class="form-label">Marca do Item:</label>
        <input v-model="itemBrand" id="brand" class="form-input" required />
      </div>

      <div class="form-group">
        <label for="quantity" class="form-label">Quantidade:</label>
        <input
          v-model.number="itemQuantity"
          id="quantity"
          type="number"
          class="form-input"
          min="1"
          required
        />
      </div>

      <div class="form-group">
        <label for="unit" class="form-label">Tipo de Medida:</label>
        <select v-model="itemUnit" id="unit" class="form-input" required>
          <option value="KG">KG</option>
          <option value="G">G</option>
          <option value="MG">MG</option>
          <option value="UN">UN</option>
          <option value="CX">CX</option>
        </select>
      </div>

      <button type="submit" class="submit-button">Adicionar Item</button>
    </form>
    <router-link to="/" class="back-button">Voltar</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const itemName = ref('');
    const itemBrand = ref('');
    const itemQuantity = ref(1);
    const itemUnit = ref('UN');

    const addItem = () => {
      const items = JSON.parse(localStorage.getItem('items')) || [];
      items.push({
        id: Date.now(),
        name: itemName.value,
        brand: itemBrand.value,
        quantity: itemQuantity.value,
        unit: itemUnit.value,
      });
      localStorage.setItem('items', JSON.stringify(items));

      // Limpar os campos
      itemName.value = '';
      itemBrand.value = '';
      itemQuantity.value = 1;
      itemUnit.value = 'UN';

      // Feedback e redirecionamento
      alert('Item adicionado com sucesso!');
      window.location = '/';
    };

    return {
      itemName,
      itemBrand,
      itemQuantity,
      itemUnit,
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
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 30px auto;
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.add-item-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
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
