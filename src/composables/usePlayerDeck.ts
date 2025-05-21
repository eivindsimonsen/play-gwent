import { ref, type Ref } from 'vue';
import type { Card } from '../types/Card';
import allCards from '../database/cards/allCards.json';
import starterDeck from '../database/decks/starterDeck.json';

export function usePlayerDeck() {
  const playerDeck: Ref<Card[]> = ref([]);
  const availableCardsInSelectedFaction: Ref<Card[]> = ref([]);
  const isGameStarted: Ref<boolean> = ref(false);
  // const selectedFaction: Ref<Card | null> = ref(null);

  const getCardImage = (card: Card, filetype: string): string => {
    if (!card) return '';
    const imageName = `${card.deck}_${card.filename}.${filetype}`;

    console.log('Image name: ', imageName);
    console.log('Import URL: ', import.meta.url);
    return new URL(`../assets/lg/${imageName}`, import.meta.url).href;
  };

  const initializeDecks = (): void => {
    // playerDeck.value = allCards.filter(card => card.deck === selectedFaction.value);
    // availableCardsInSelectedFaction.value = allCards.filter(card => card.deck !== selectedFaction.value);

    playerDeck.value = starterDeck; // Change to faction-specific cards
    availableCardsInSelectedFaction.value = allCards; // Change to faction-specific cards

    // console.log('Decks initialized');
    // console.log("Player deck: ", playerDeck.value);
    // console.log("All cards: ", availableCardsInSelectedFaction.value);
  };
/* 
  const selectFaction = (faction: Faction): void => {
    selectedFaction.value = faction;
    // TODO: Load faction-specific cards
  };

  const addCardToDeck = (card: Card): void => {
    if (playerDeck.value.length >= 40) {
      throw new Error('Deck is already full (40 cards maximum)');
    }
    playerDeck.value.push(card);
  };

  const removeCardFromDeck = (cardId: string): void => {
    const index = playerDeck.value.findIndex(card => card.id === cardId);
    if (index !== -1) {
      playerDeck.value.splice(index, 1);
    }
  }; */

  const startGame = (): void => {
    console.log('Starting game...');
    /* if (playerDeck.value.length !== 40) {
      throw new Error('Deck must contain exactly 40 cards to start the game');
    }
    if (!selectedFaction.value) {
      throw new Error('A faction must be selected before starting the game');
    } */
    isGameStarted.value = true;
    console.log('Game started!!');
  };

  // Initialize decks when the composable is created
  initializeDecks();

  return {
    // State
    playerDeck,
    availableCardsInSelectedFaction,
    // selectedFaction,
    isGameStarted,
    
    // Methods
 /*    selectFaction,
    addCardToDeck,
    removeCardFromDeck, */
    startGame,
    getCardImage,
  };
}
