import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface Score {
  _id: string;
  name: string;
  score: number;
  timeStamp: string;
  __v: number;
  isMe?: boolean;
}

export const useGameStore = defineStore('game', () => {
  const board = ref<Score[]>([]);
  const boardResult = ref<Score[] | null>(null);
  const myScore = ref<Score | null>(null);

  const hasBoardResult = computed(() => !!(boardResult.value && boardResult.value.length > 1));

  async function fetchBoard() {
    const res = await fetch('https://music-trivia.onrender.com/api/score');
    const data = await res.json();
    board.value = data;
    boardResult.value = data;
  }



  return { board, boardResult, myScore, hasBoardResult, fetchBoard };
});
