import { ref, type Ref } from 'vue';
import type { Card } from '../types/Card';
import type { Faction } from '../types/Faction';

export function usePreGame() {
  const playerDeck: Ref<Card[]> = ref([]);
  const opponentDeck: Ref<Card[]> = ref([]);
  const selectedFaction: Ref<Faction | null> = ref(null);
  const isGameStarted: Ref<boolean> = ref(false);

  const initializeDecks = (): void => {
    playerDeck.value = [];
    opponentDeck.value = [];
  };

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
  };

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
    opponentDeck,
    selectedFaction,
    isGameStarted,
    
    // Methods
    selectFaction,
    addCardToDeck,
    removeCardFromDeck,
    startGame,
  };
}
