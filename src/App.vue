<script setup lang="ts">
import PreGame from "./components/PreGame.vue";

</script>

<template>
  <main>
     <PreGame />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
  cursor: url(assets/icons/cursor.png), auto;
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