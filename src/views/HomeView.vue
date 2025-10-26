<template>
  <DefaultLayout>
    <section class="homeContainer">
      <router-link to="/game" class="startButton">Start Game</router-link>
    </section>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<style src="./home.css"></style>
