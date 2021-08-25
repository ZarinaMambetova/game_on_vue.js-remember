<template>
  <div class="board__wrapper">
    <div class="board">
      <BoardItem :game-Status="gameStatus" v-for="field in fields" :field="field" :key="'item-' + field.id" 
      @selectField="selectField($event)"/>
    </div>
    <p class="difficult">Сложность: <strong>{{difficult}}</strong></p>
    <button class="btn" @click="start" :disabled="!canStartGame">Старт</button>
  </div>
</template>

<script>
  import BoardItem from './BoardItem';
  import { onBeforeMount, ref, computed } from 'vue';
  import { FIELD, DEFAULT_DIFFICULT, GAME_STATUS, GAME_SPEED, MAX_DIFFICULT } from '@/constants.js';

  export default {
    name: 'Board',
    props: {},
    components: {
      BoardItem, 
      },
      setup() {

        let difficult = ref(DEFAULT_DIFFICULT);
        let fields = ref([]);
        const number = 25;
       const gameStatus = ref(GAME_STATUS.NONE);
       const selectField = (id) => {
         const index = fields.value.findIndex((field) => {
           return field.id === id;
           
         });
         if (index > -1 && !fields.value[index].clicked) {
           fields.value[index].clicked = true;

           checkGame();

         }
       };
        const checkGame = () => {
            const errorIndex = fields.value.findIndex(field => {
              return field.clicked && field.value === FIELD.EMPTY;
            });
            if (errorIndex > -1) {
              setGameOver();
              return;
            }
            const notFoundItemIndex = fields.value.findIndex(field => {
              return !field.clicked && field.value === FIELD.FILLED;
            });

            if (notFoundItemIndex === -1) {
                setWin();
            }
        }

        const setGameOver = () => {
          console.log('fail');
            gameStatus.value = GAME_STATUS.FAIL;
            difficult.value = DEFAULT_DIFFICULT;
        }

        const setWin = () => {
          if (difficult.value < MAX_DIFFICULT) {
             difficult.value += 1;
           
          } else {
              difficult.value = DEFAULT_DIFFICULT;
          }
           

        }

        
        const init = () => {
          fields.value = [];
          fields.value = [];

          for (let i = 0; i < number; i++) {
            fields.value.push({
              id: i,
              clicked: false,
              value: FIELD.EMPTY,
            });
          }

        }

      const canStartGame = computed(() => {
          return gameStatus.value !== GAME_STATUS.PREVIEW;

        });

        onBeforeMount(init);

        return {
          number,
          difficult,
          fields,
          init, 
          gameStatus,
          canStartGame,
          selectField,
          checkGame
        }
        
      },

      methods: {

        start() {
          this.init();
          this.prepareGame();
        },
        prepareGame() {
          this.gameStatus = GAME_STATUS.PREVIEW;
          

          for (let i = 0; i < this.difficult; i++) {
            const index = this.rand(0, this.number -1);  

            if (this.fields[index].value !==FIELD.FILLED) {
              this.fields[index].value = FIELD.FILLED;
            } else {
              i--;
            }
          }

          setTimeout(() => {
            this.gameStatus = GAME_STATUS.STARTED;
          }, GAME_SPEED);
        },
        rand(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        },


      },

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

  button:disabled {
    opacity: .5;
  }
</style>