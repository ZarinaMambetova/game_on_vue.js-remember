<template>
  <div class="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">

    <h1>Remember me, Vue 3</h1>
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
  width: 100px;
}
.app {
  margin-top: 40px;
  text-align: center;
  font-family:  Helvetica, sans-serif;
}
</style>
