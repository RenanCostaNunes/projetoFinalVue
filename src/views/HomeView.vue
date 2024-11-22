<template>
  <div class="shopping-list-container">
    <h1 class="title">Bem-vindo ao Gerenciador de Compras</h1>
    <div class="links">
      <router-link to="/add-item" class="link-button">Adicionar Item</router-link>
      <router-link to="/items" class="link-button">Lista de Itens</router-link>
      <router-link to="/start-shopping" class="link-button">Iniciar Compras</router-link>
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
  background: linear-gradient(to bottom right, #f9f9f9, #e3e3e3);
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.title {
  font-size: 2.8rem;
  font-weight: bold;
  color: #444;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.link-button {
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.link-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.link-button:active {
  transform: scale(0.98);
  background-color: #004494;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .link-button {
    font-size: 1rem;
    padding: 10px 15px;
  }
}
</style>
