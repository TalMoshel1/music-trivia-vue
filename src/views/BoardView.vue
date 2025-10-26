<template>
  <section
    class="boardPage"
    v-if="boardResults && boardResults.length > 0"
  >
    <h1 class="boardTitle">SCORE BOARD</h1>

    <div class="scoresWrapper">
      <ScoreItem
        v-for="row in boardResults"
        :key="row._id"
        :score="row"
      />
    </div>

    <button
      class="resetButton"
      @click="$emit('resetGame')"
    >
      Reset
    </button>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useGameStore } from '@/store/gameStore';
import ScoreItem from '@/components/Score/ScoreItem.vue';
import type { ScoreInterface } from '@/views/types';

const props = defineProps<{
  boardResults: ScoreInterface[];
}>();

defineEmits<{
  (e: 'resetGame'): void;
}>();

const game = useGameStore();

onMounted(() => {
  game.playSound('');
});
</script>

<style src="./board.css"></style>
