<template>
  <p>{{ message }}</p>
  <p>{{ _message }}</p>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'xxx',

  props: {
    message: {
      type: String,
      default: ''
    }
  },

  // On récup les props ici, on peut les déstructurer au besoin
  setup({ message }) {
    const _message = computed(() => message + '!!!')

    return { _message }
  }
}
</script>