<template>
  <main class="gamePage">
    <BoardView
      v-if="game.hasBoardResult"
      :boardResults="game.boardResult ?? []"
      @resetGame="resetGame"
    />

    <section v-else-if="!started && ready" class="startScreen">
      <label for="playerName" class="startLabel">Enter your name</label>
      <input id="playerName" v-model="playerName" class="startInput" />
      <button class="startButton" @click="startGame">Start</button>
    </section>

    <QuizView
      v-else-if="started && ready"
      :questions="questions"
      :player-name="playerName"
      @quizComplete="handleQuizComplete"
    />

    <section v-else class="loadingWrapper">
      <h2>Loading...</h2>
      <div class="loaderCircle"></div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFetch } from '@/helpers/useFetch';
import { useGameStore } from '@/store/gameStore';
import QuizView from './QuizView.vue';
import BoardView from './BoardView.vue';

const game = useGameStore();
const playerName = ref('');
const started = ref(false);

const { data } = useFetch('https://music-trivia.onrender.com/api/question');
const questions = computed(() => data.value || []);
const ready = computed(() => questions.value.length > 0);

function startGame() {
  started.value = true;
}

function resetGame() {
  window.location.reload();
}

async function handleQuizComplete(payload: { answers: unknown[] }) {
  const res = await fetch('https://music-trivia.onrender.com/api/score', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ answers: payload.answers, name: playerName.value }),
  });
  const result = await res.json();
  game.myScore = result;
  await game.fetchBoard();
  started.value = false;
}
</script>

<style src="./game.css"></style>
