import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { ScoreInterface } from '@/interfaces/api';

export const useGameStore = defineStore('game', () => {
  const board = ref<ScoreInterface[]>([]);
  const boardResult = ref<ScoreInterface[] | null>(null);
  const myScore = ref<ScoreInterface | null>(null);

  const hasBoardResult = computed(() => !!(boardResult.value && boardResult.value.length > 0));

  async function fetchBoard() {
    const res = await fetch('https://music-trivia.onrender.com/api/score');
    const data = await res.json();
    board.value = data;
    boardResult.value = data;
  }

  function setBoardResult(newBoard: ScoreInterface[] | null) {
    boardResult.value = newBoard;
  }

  function postMyScore(score: ScoreInterface) {
    myScore.value = score;
  }

  return {
    board,
    boardResult,
    myScore,
    hasBoardResult,
    fetchBoard,
    setBoardResult, 
    postMyScore,    
  };
});
