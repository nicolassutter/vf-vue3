<template>
  <h2 class="title">Styles</h2>
  <p class="text text-white p-2 rounded">Du rouge</p>
  <div class="space-x-2">
    <button class="button" @click="set_color('red')">Rouge</button>
    <button class="button" @click="set_color('green')">Vert</button>
    <button class="button" @click="set_color('blue')">Bleu</button>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'

export default {
  name: 'xxx',

  setup() {
    const color = ref('red')

    const set_color = (_color: string) => color.value = _color

    return { color, set_color }
  }
}
</script>

<style scoped>
/* Va créer une variable css */
.text {
  background: v-bind(color);
}

.button {
  @apply bg-gray-700 rounded p-3 text-white;
}
</style>