import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
export const useGameStore = defineStore('game', () => {
    const board = ref([]);
    const boardResult = ref(null);
    const myScore = ref(null);
    const hasBoardResult = computed(() => !!(boardResult.value && boardResult.value.length > 0));
    async function fetchBoard() {
        const res = await fetch('https://music-trivia.onrender.com/api/score');
        const data = await res.json();
        board.value = data;
        boardResult.value = data;
    }
    function setBoardResult(newBoard) {
        boardResult.value = newBoard;
    }
    function postMyScore(score) {
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
