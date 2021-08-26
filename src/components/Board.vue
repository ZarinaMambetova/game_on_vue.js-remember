<template>
  <div class="board__wrapper">
    <div class="board">
      <BoardItem :game-Status="gameStatus" v-for="field in fields" :field="field" :key="'item-' + field.id" 
      @selectField="selectField($event)"/>
    </div>
    <p class="difficult">Сложность: <strong>{{difficult}}</strong></p>
    <p class="win" v-if="isWin">Поздравляю! Продолжаем играть!</p>
    <p class="fail" v-if="isFail">Вы проиграли:( Попробуйте еще раз!</p>
    <button class="btn" @click="start" :disabled="!canStartGame">Старт</button>
  </div>
</template>

<script>
  import BoardItem from './BoardItem';
  import { onBeforeMount, ref, computed, watch } from 'vue';
  import {  nextTick } from 'vue';
  import { FIELD, DEFAULT_DIFFICULT, GAME_STATUS, GAME_SPEED, MAX_DIFFICULT } from '@/constants.js';

  export default {
    name: 'Board',
    props: {
     
    },
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
             gameStatus.value = GAME_STATUS.WIN;
          setTimeout(async() => {
            
             difficult.value += 1;
             await nextTick();
        gameStatus.value = GAME_STATUS.NONE;
          }, GAME_SPEED);


        }
        const isWin = computed(() => {
          return gameStatus.value === GAME_STATUS.WIN;

        });
        const isFail = computed(() => {
            return  gameStatus.value === GAME_STATUS.FAIL;

        }); 
        
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
          return gameStatus.value !== GAME_STATUS.PREVIEW ;

        });
watch (difficult, (newdifficult) => {
if (newdifficult > MAX_DIFFICULT) {
  difficult.value = MAX_DIFFICULT;
}
}),
        onBeforeMount(init);

        return {
          number,
          difficult,
          fields,
          init, 
          gameStatus,
          canStartGame,
          selectField,
          checkGame,
          isWin,
          isFail
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

  .win {
color: #42b983;

  }

  .fail {
    color: #ff000055;

  }

</style>