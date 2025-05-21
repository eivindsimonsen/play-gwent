<script setup lang="ts">
import PreGame from "./components/PreGame.vue";

</script>

<template>
  <main>
    <!-- <h1>Gwent Card Game</h1> -->
     <PreGame />
     <div class="opponent-sentry">awdawd</div>
     <div class="opponent-length">awdawd</div>
     <div class="opponent-close">awdawd</div>
     <div class="player-sentry">awdawd</div>
     <div class="player-length">awdawd</div>
     <div class="player-close">awdawd</div>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

h1 {
  color: white;
}

body {
  font-family: var(--font-family);
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  min-height: 100vh;
  background-image: var(--background-image);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

main {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  /*border: 1px solid red; /* TODO: Remove border */
  z-index: 20;
}
</style>