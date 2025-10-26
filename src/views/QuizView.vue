<template>
  <section class="quizPage">
    <QuestionRoot v-if="currentQuestion">
      <QuestionPrompt :body="currentQuestion.body" />

      <QuestionAnswers
        :answers="currentQuestion.answers"
        :currentQuestionId="currentQuestion._id"
        @selectAnswer="handleAnswerSelect"
      />

      <QuestionNext @next="handleNext" />
    </QuestionRoot>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import QuestionRoot from "@/components/Question/QuestionRoot.vue";
import QuestionPrompt from "@/components/Question/QuestionPrompt.vue";
import QuestionAnswers from "@/components/Question/QuestionAnswers.vue";
import QuestionNext from "@/components/Question/QuestionNext.vue";
import type {
  QuestionInterface,
  AnswerInterface,
  userAnswerInterface,
} from "@/views/types";

const props = defineProps<{
  questions: QuestionInterface[];
  playerName: string;
}>();

const emit = defineEmits<{
  (e: "quizComplete", payload: { answers: userAnswerInterface[] }): void;
}>();

const TOTAL_QUESTIONS = 9;

const questionIndex = ref(0);
const answersSoFar = ref<userAnswerInterface[]>([]);
const selectedAnswerForCurrent = ref<AnswerInterface | null>(null);

const currentQuestion = computed(() => props.questions[questionIndex.value]);

function handleAnswerSelect(answer: AnswerInterface) {
  selectedAnswerForCurrent.value = answer;
}

function handleNext() {
  const q = currentQuestion.value;
  const chosen = selectedAnswerForCurrent.value;

  if (!q || !chosen) {
    return;
  }

  answersSoFar.value.push({
    questionId: q._id,
    answerId: chosen.answerId,
  });

  selectedAnswerForCurrent.value = null;

  const nextIndex = questionIndex.value + 1;
  const hasMoreQuestions =
    nextIndex < TOTAL_QUESTIONS && nextIndex < props.questions.length;

  if (hasMoreQuestions) {
    questionIndex.value = nextIndex;
  } else {
    emit("quizComplete", {
      answers: answersSoFar.value,
    });
  }
}

watch(
  () => props.questions,
  () => {
    questionIndex.value = 0;
    answersSoFar.value = [];
    selectedAnswerForCurrent.value = null;
  }
);
</script>


<style src="./quiz.css"></style>
