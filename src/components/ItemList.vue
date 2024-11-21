<template>
  <div>
    <h2>Lista de Itens</h2>
    <div>
      <label for="filter">Filtrar por Tipo de Medida:</label>
      <select v-model="selectedFilter" id="filter">
        <option value="">Todos</option>
        <option value="KG">KG</option>
        <option value="G">G</option>
        <option value="MG">MG</option>
        <option value="UN">UN</option>
        <option value="CX">CX</option>
      </select>
    </div>
    <ul v-if="filteredItems.length">
      <li v-for="(item, index) in filteredItems" :key="item.id">
        <div v-if="editingIndex === index">
          <input v-model="editedItem.name" placeholder="Nome do Item" />
          <input v-model="editedItem.brand" placeholder="Marca" />
          <input type="number" v-model.number="editedItem.quantity" placeholder="Quantidade" />
          <select v-model="editedItem.unit">
            <option value="KG">KG</option>
            <option value="G">G</option>
            <option value="MG">MG</option>
            <option value="UN">UN</option>
            <option value="CX">CX</option>
          </select>
          <button @click="saveEdit(index)">Salvar</button>
          <button @click="cancelEdit">Cancelar</button>
        </div>
        <div v-else>
          <p><strong>Nome:</strong> {{ item.name }}</p>
          <p><strong>Marca:</strong> {{ item.brand }}</p>
          <p><strong>Quantidade:</strong> {{ item.quantity }} {{ item.unit }}</p>
          <button @click="startEdit(index, item)">Editar</button>
          <button @click="deleteItem(item.id)">Apagar</button>
        </div>
      </li>
    </ul>
    <p v-else>Sem itens adicionados ou encontrados para o filtro.</p>

    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue';

export default {
  setup() {
    const items = ref([]);
    const selectedFilter = ref('');
    const editingIndex = ref(null);
    const editedItem = reactive({
      name: '',
      brand: '',
      quantity: 1,
      unit: 'UN',
    });

    const loadItems = () => {
      items.value = JSON.parse(localStorage.getItem('items')) || [];
    };

    const startEdit = (index, item) => {
      editingIndex.value = index;
      Object.assign(editedItem, { ...item });
    };

    const saveEdit = (index) => {
      Object.assign(items.value[index], { ...editedItem });
      localStorage.setItem('items', JSON.stringify(items.value));
      editingIndex.value = null;
    };

    const cancelEdit = () => {
      editingIndex.value = null;
    };

    const deleteItem = (id) => {
      items.value = items.value.filter((item) => item.id !== id);
      localStorage.setItem('items', JSON.stringify(items.value));
    };

    const filteredItems = computed(() => {
      if (!selectedFilter.value) {
        return items.value;
      }
      return items.value.filter((item) => item.unit === selectedFilter.value);
    });

    onMounted(() => {
      loadItems();
    });

    return {
      items,
      selectedFilter,
      filteredItems,
      editingIndex,
      editedItem,
      startEdit,
      saveEdit,
      cancelEdit,
      deleteItem,
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
  margin-top: 0.5em;
  margin-right: 0.5em;
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
button:last-child {
  background-color: #f44336;
}
button:last-child:hover {
  background-color: #d32f2f;
}
input, select {
  margin-top: 0.5em;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: block;
}
</style>
