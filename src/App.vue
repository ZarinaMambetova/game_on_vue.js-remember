<template>
  <div class="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">

    <h1>Remember me, <br>Vue 3</h1>
    <p>Запомни и открой все зеленые клетки</p>
  </div>
  
  <Board/>
</template>

<script>
import Board from './components/Board';
export default {
  name: 'App',
  components: {
   Board,
  }
}
</script>

<style scoped>
.logo {
  width: 50px;
}
.app {
  margin-top: 20px;
  text-align: center;
  font-family:  Helvetica, sans-serif;
}

h1 {
    font-size: 1.5em;
}
</style>
