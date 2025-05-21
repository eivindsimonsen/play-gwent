<script setup lang="ts">
import { usePreGame } from '../composables/usePreGame'
// import { PreGameAgent } from '../agents/PreGameAgent';

const { isGameStarted, startGame } = usePreGame();

// const preGameAgent = new PreGameAgent();
// function startGame() {
//    preGameAgent.startGame();
// }

</script>

<template>
   <section v-if="!isGameStarted" class="pre-game">
      <div class="card-collection">
         Cards in collection
      </div>
      <div class="start-game">
         <p>Info</p>
         <p>Info</p>
         <p>Info</p>
         <p>Info</p>
         <button @click="startGame">Start Game</button>
      </div>
      <div class="cards-in-deck">
         Cards in deck
      </div>
   </section>
</template>

<style scoped>
.pre-game {
   position: fixed;
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: var(--background-color-transparent);
   color: white;
}

.pre-game > div {
   overflow: auto;
   border: 1px solid red; /* TODO: Remove border */
   width: 100%;
   height: 80vh;
}

</style>
