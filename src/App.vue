<template>
  <div :class="{ Light: $store.state.theme }" class="body">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,400;0,800;1,600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
}
*:focus {
  outline: none;
}

:root {
  --Dark-Mode-Elements: hsl(209, 23%, 22%);
  --Dark-Mode-Background: hsl(207, 26%, 17%);
  --Light-Mode-Text: hsl(200, 15%, 8%);
  --Light-Mode-Input: hsl(0, 0%, 52%);
  --Light-Mode-Background: hsl(0, 0%, 98%);
  --Dark-Mode-Text: hsl(0, 0%, 100%);
  --Light-Mode-Elements: hsl(0, 0%, 100%);
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
}
.body {
  min-height: 100vh;
  height: 100%;
  position: relative;
  background: var(--Light-Mode-Background);
  color: var(--Light-Mode-Text);
  padding-bottom: 4rem;
}
/* brightness */
.body.Light {
  background: var(--Dark-Mode-Background);
  color: var(--Dark-Mode-Text);
  animation-name: opacity;
  animation-duration: 2s;
}
@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>