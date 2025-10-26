<template>
  <div class="layoutWrapper">
    <header class="layoutHeader">
      Welcome To Music Keys Trivia!
    </header>
    <main class="layoutMain">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layoutWrapper {
  display: flex;
  flex-direction: column;
  height: 100svh;
}

.layoutHeader {
  padding: 1rem;
  text-align: center;
}

.layoutLogo {
  height: 3rem;
}

.layoutMain {
  flex: 1;
  display: grid;
  place-items: center;
}
</style>
