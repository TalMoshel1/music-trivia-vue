<template>
  <div
    class="promptWrapper"
    :class="{ isQuestionBodyScaledUp: shouldScale }"
  >
    <h2 class="promptText">
      {{ beginning }}
    </h2>
    <strong class="promptStrong">
      {{ ending }}
    </strong>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';

const props = defineProps<{
  body: string;
}>();

const beginning = computed(() => {
  const parts = props.body.split(' ');
  return parts.slice(0, -2).join(' ');
});

const ending = computed(() => {
  const parts = props.body.split(' ');
  return parts.slice(-2).join(' ');
});

const shouldScale = ref(false);

watchEffect(() => {
  shouldScale.value = false;
});
</script>
