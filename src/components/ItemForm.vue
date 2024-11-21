
<template>
  <div>
    <h2>Adicionar Novo Item</h2>
    <form @submit.prevent="addItem">
      <div>
        <label for="name">Nome do Item:</label>
        <input v-model="itemName" id="name" required />
      </div>
      <div>
        <label for="brand">Marca do Item:</label>
        <input v-model="itemBrand" id="brand" required />
      </div>
      <div>
        <label for="quantity">Quantidade:</label>
        <input v-model.number="itemQuantity" id="quantity" type="number" min="1" required />
      </div>
      <div>
        <label for="unit">Tipo de Medida:</label>
        <select v-model="itemUnit" id="unit" required>
          <option value="KG">KG</option>
          <option value="G">G</option>
          <option value="MG">MG</option>
          <option value="UN">UN</option>
          <option value="CX">CX</option>
        </select>
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
      itemName.value = '';
      itemBrand.value = '';
      itemQuantity.value = 1;
      itemUnit.value = 'UN';
      alert('Item adicionado com sucesso!');
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
form div {
  margin-bottom: 1em;
}
label {
  display: block;
  font-weight: bold;
}
input, select, button {
  display: block;
  margin-top: 0.5em;
}
</style>
