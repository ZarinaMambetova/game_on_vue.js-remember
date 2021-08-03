<template>
  <div class="board__wrapper">
    <div class="board">
      <BoardItem v-for="field in fields" :field="field" :key="'item-' + field.id"/>
    </div>
    <p class="difficult">Сложность: <strong>{{difficult}}</strong></p>
    <button class="btn" @click="start">Старт</button>
  </div>
</template>

<script>
  import BoardItem from './BoardItem';
  import { onBeforeMount, ref } from 'vue';

  export default {
    name: 'Board',
    props: {},
    components: {
      BoardItem, 
      },
      setup() {
        let difficult = ref(3);
        let fields = ref([]);
        const number = 25;

        const init = () => {
          fields.value = [];
          fields.value = [];

          for (let i = 0; i < number; i++) {
            fields.value.push({
              id: i,
              clicked: false,
              value: 0,
            });
          }

        }

        onBeforeMount(init);

        return {
          number,
          difficult,
          fields,
          init
        }
      },
      methods: {
        start() {
          this.init();
          this.prepareGame();
        },
        prepareGame() {
          for (let i = 0; i < this.difficult; i++) {
            const index = this.rand(0, this.number -1);  

            if (this.fields[index].value !==1) {
              this.fields[index].value = 1;
            } else {
              i--;
            }
          }
        },
        rand(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        },
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