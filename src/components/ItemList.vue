<template>
  <div>
    <h2>Lista de Itens</h2>
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
        <button @click="deleteItem(item.id)">Apagar</button>
      </li>
    </ul>
    <p v-else>Sem itens adicionados.</p>
    <router-link to="/">Voltar</router-link>
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
      items.value = items.value.filter((item) => item.id !== id);
      localStorage.setItem('items', JSON.stringify(items.value));
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
