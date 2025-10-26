<template>
  <article
    class="scoreItem"
    :aria-label="`score of ${score.name}`"
  >
    <h2 class="scoreName">
      {{ score.isMe ? `${score.name} (me)` : score.name }}
    </h2>
    <p class="scoreValue" aria-label="score value">
      {{ score.score }}
    </p>
  </article>
</template>

<script setup lang="ts">
import type { ScoreInterface } from '@/views/types';

defineProps<{
  score: ScoreInterface;
}>();
</script>

<style src="./score.css"></style>
