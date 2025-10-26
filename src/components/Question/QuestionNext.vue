<template>
  <button
    class="nextButton"
    @click="$emit('next')"
    type="button"
  >
    NEXT
  </button>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'next'): void;
}>();
</script>
