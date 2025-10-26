<template>
  <button
    class="baseButton"
    :class="variantClass"
    :disabled="disabled"
    :type="type"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'neutral';
    disabled?: boolean;
    type?: 'button' | 'submit';
  }>(),
  {
    variant: 'primary',
    disabled: false,
    type: 'button'
  }
);

const variantClass = computed(() =>
  props.variant === 'primary'
    ? 'baseButtonPrimary'
    : 'baseButtonNeutral'
);
</script>

<style src="./button.css"></style>
