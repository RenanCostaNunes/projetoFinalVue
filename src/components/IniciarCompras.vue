<template>
    <div>
      <h2>Iniciar Compras</h2>
      <ul v-if="items.length">
        <li v-for="item in items" :key="item.id">
          <label>
            <input type="checkbox" v-model="item.checked" />
            {{ item.name }} - {{ item.brand }} ({{ item.quantity }} {{ item.unit }})
          </label>
        </li>
      </ul>
      <p v-else>Nenhum item na lista de compras.</p>
      <div v-if="items.length">
        <button @click="finalizePurchases">Finalizar Compras</button>
      </div>
      <router-link to="/">Voltar</router-link>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const items = ref([]);
  
      const loadItems = () => {
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
        items.value = storedItems.map(item => ({ ...item, checked: false }));
      };
  
      const finalizePurchases = () => {
        const confirmed = confirm("Tem certeza de que deseja finalizar as compras?");
        if (confirmed) {
          const secondConfirmation = confirm("Esta ação é irreversível. Deseja continuar?");
          if (secondConfirmation) {
            items.value = items.value.filter(item => !item.checked);
            localStorage.setItem('items', JSON.stringify(items.value));
            alert("Compras finalizadas e itens comprados removidos com sucesso!");
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
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 1em;
    border: 1px solid #ccc;
    padding: 1em;
    border-radius: 5px;
  }
  button {
    margin-top: 1em;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    padding: 0.5em 1em;
    border-radius: 3px;
    cursor: pointer;
  }
  button:hover {
    background-color: #388E3C;
  }
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  input[type="checkbox"] {
    margin-right: 0.5em;
  }
  </style>
  