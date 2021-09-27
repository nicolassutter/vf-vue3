<template>
  <p class="text-red">Du rouge</p>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'

export default {
  name: 'xxx',

  setup() {
    const color = ref('red')

    return { color }
  }
}
</script>

<style scoped>
/* Va créer une variable css */
.text-red {
  color: v-bind(color);
}
</style>