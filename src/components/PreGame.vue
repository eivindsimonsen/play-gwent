<script setup lang="ts">
import { usePlayerDeck } from '../composables/usePlayerDeck'
import type { Card } from '../types/Card'

const { isGameStarted, startGame, playerDeck, availableCardsInSelectedFaction, getCardImage } = usePlayerDeck();

const addCardToDeck = (card: Card) => {
   playerDeck.value.push(card);
   
  const rightSection = document.querySelector('.right-section');
  setTimeout(() => {
    if (rightSection) {
      rightSection.scrollTop = rightSection.scrollHeight;
    }
  }, 0);
}
</script>

<template>
   <section v-if="!isGameStarted" class="pre-game-container">
      <section class="pre-game-header">
         <div>
            <h1>All cards</h1>
         </div>
         <div>
            <h1>Faction name</h1>
            <p>Faction ability</p>
            <button>Change faction</button>
         </div>
         <div>
            <h1>Your deck</h1>
         </div>
      </section>
      <section class="pre-game-content">
         <div class="left-section deck-grid">
            <div v-for="card in availableCardsInSelectedFaction" :key="card.id">
               <img :src="getCardImage(card, 'jpg')" :alt="`Card image of ${card.name}`" @click="addCardToDeck(card)">
               <span>{{ card.count }}</span>
            </div>
         </div>
         <div class="mid-section">
            <h2>Leader</h2>
            <!-- <img :src="getCardImage(playerDeck[0])" :alt="`Card image of ${playerDeck[0].name}`"> -->
            <p>Total cards in deck</p>
            <p>Number of unit cards</p>
            <p>Special cards</p>
            <p>Total unit card strength</p>
            <p>Hero cards</p>
            <button @click="startGame()">Start Game</button>
         </div>
         <div class="right-section deck-grid">
            <div v-for="card in playerDeck" :key="card.id">
               <img :src="getCardImage(card, 'jpg')" :alt="`Card image of ${card.name}`">
               <span>{{ card.count }}</span>
            </div>
         </div>
      </section>
   </section>
</template>

<style scoped>
.pre-game-header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 20px;
}

.pre-game-container {
   position: fixed;
   width: 100vw;
   height: 100vh;
   background-color: var(--background-color-transparent);
   color: white;
   padding: 0 calc(10% + 10px);
   text-align: center;
}

.pre-game-content {
   display: grid;
   grid-template-columns: 38% 24% 38%;
   place-items: center;
}

/* ".pre-game > div" also works */
.left-section, .mid-section, .right-section {
   overflow: auto;
   width: 100%;
   height: 80vh;
   scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color); /* For Firefox */

}

.deck-grid {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(3, 1fr); 
   gap: 12px;
   padding: 0px 20px;
}

img {
   border-radius: 18px;
}

.mid-section img {
   width: 170px;
}

.right-section img, .left-section img {
   width: 100%;
}


</style>
