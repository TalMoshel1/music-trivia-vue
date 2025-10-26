<template>
  <form class="answersForm" @submit.prevent>
    <label
      v-for="(ans, idx) in answers"
      :key="ans.answerId + '-' + currentQuestionId"
      class="answerOption"
      :class="{ answerActive: ans.answerId === activeId }"
      tabindex="0"
      @click="pick(ans)"
      @keydown.enter.prevent="pick(ans)"
      @keydown.space.prevent="pick(ans)"
    >
      {{ ans.body }}
    </label>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useGameStore } from '@/store/gameStore';
import type { AnswerInterface } from '@/views/types';

const emit = defineEmits<{
  (e: 'selectAnswer', answer: AnswerInterface): void;
}>();

const props = defineProps<{
  answers: AnswerInterface[];
  currentQuestionId: string;
}>();

const store = useGameStore();
const activeId = ref<number | null>(null);

watch(
  () => props.currentQuestionId,
  () => {
    activeId.value = null;
  }
);

function pick(ans: AnswerInterface) {
  activeId.value = ans.answerId;
  const audioUrl = `https://music-trivia.s3.eu-central-1.amazonaws.com/${ans.body.replaceAll(' ', '+')}.aac`;
  emit('selectAnswer', ans);
}
</script>
