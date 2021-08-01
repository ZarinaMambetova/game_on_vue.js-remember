<template>
  <div class="board__wrapper">
    <div class="board">
      <BoardItem v-for="i in 25" :key="'item-' +i"/>
    </div>
    <p class="difficult">Сложность: <strong>{{difficult}}</strong></p>
    <button class="btn">Старт</button>
  </div>
</template>

<script>
  import BoardItem from './BoardItem';
  import { ref } from 'vue';

  export default {
    name: 'Board',
    props: {},
    components: {
      BoardItem, 
      },
      setup() {
        const difficult = ref(3);

        return {
          difficult
        }
      }
  }
</script>

<style scoped>
  .board__wrapper {
    margin-bottom: 100px;
    text-align: center;
  }

  .board {
    width: 300px;
    background: #eee;
    margin: 0 auto;

  }
  .btn {
    background: #42b983cc;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 15px 50px;
    margin: 10px 0;
    cursor: pointer;
    outline: none;
  }

  .btn:hover {
    background: #42b983;
  }
</style>