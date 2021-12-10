<template>
  <div id="page-container">
    <div
      id="title"
      class="flex justify-center items-center w-full min-h-screen"
    >
      <div
        class="flex flex-col justify-center items-center bg-white p-2 xs:p-5 md:p-10 rounded-xl shadow-lg"
      >
        <img
          src="../assets/logo.png"
          alt="Friendship Bubble Logo"
          class="rounded-full max-h-24 xs:max-h-32 md:max-h-44 mb-6"
        />
        <p class="text-base xs:text-lg md:text-xl text-center">Welcome to</p>
        <h1 class="text-lg xs:text-2xl md:text-4xl font-semibold text-center">
          Friendship Bubble!
        </h1>
        <h2 class="text-xs xs:text-base text-center">
          We're glad you're here.
        </h2>
        <div class="flex space-x-1 mt-2">
          <a
            href="https://discord.gg/PC5cDtXUSg"
            target="_blank"
            style="color: #5865f2"
            ><font-awesome-icon :icon="['fab', 'discord']" size="lg"
          /></a>
          <a
            href="https://www.instagram.com/friendshipbubble"
            target="_blank"
            style="color: #dd2a7b"
            ><font-awesome-icon :icon="['fab', 'instagram']" size="lg"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {}
</script>

<style scoped>
#page-container {
  background: rgb(244, 211, 219);
  background: radial-gradient(
    circle,
    rgba(244, 211, 219, 1) 0%,
    rgba(93, 97, 121, 1) 69%
  );
}
</style>
