<template>
  <div class="shopping-list-container">
    <h1 class="title">Bem-vindo à sua Lista de Compras</h1>
    <div class="links">
      <router-link to="/add-item" class="link-button">Adicionar Novo Item</router-link>
      <span class="separator">|</span>
      <router-link to="/items" class="link-button">Ver Itens</router-link>
    </div>
  </div>
</template>

<style scoped>
.shopping-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.link-button {
  text-decoration: none;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.link-button:hover {
  background-color: #0056b3;
}

.separator {
  font-size: 1.2rem;
  color: #555;
}
</style>
