<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFetch } from '@/helpers/useFetch';
import { useGameStore } from '@/store/gameStore';
import QuizView from './QuizView.vue';
import type { QuestionInterface } from '@/interfaces/api';

const game = useGameStore();
const started = ref(false);
const playerName = ref('');

const { data } = useFetch<QuestionInterface[]>('https://music-trivia.onrender.com/api/question');
const questions = computed(() => data.value || []);
const ready = computed(() => questions.value.length > 0);

function startGame() {
  if (playerName.value.trim()) started.value = true;
}

function handleQuizComplete(payload: any) {
  game.setBoardResult(payload.answers);
}
</script>

<template>
  <div class="game-container">
    <div v-if="!started" class="start-screen">
      <input v-model="playerName" placeholder="Enter your name" class="player-input" />
      <button class="btnPrimary" @click="startGame">Start Game</button>
    </div>

    <QuizView
      v-else-if="started && ready"
      :questions="questions"
      :playerName="playerName"
      @quizComplete="handleQuizComplete"
    />
  </div>
</template>

<style scoped>
.game-container {
  width: 100%;
  min-height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.start-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.player-input {
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: var(--radius-sm);
  border: 0.1rem solid var(--color-border);
  text-align: center;
  outline: none;
}

.btnPrimary {
  background: var(--color-accent);
  color: var(--color-bg);
  padding: 1rem 2rem;
  border: none;
  border-radius: var(--radius-sm);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.btnPrimary:hover {
  background: var(--color-accent-hover);
}
</style>
