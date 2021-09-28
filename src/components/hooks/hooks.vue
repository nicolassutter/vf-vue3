<template>
  <h2 class="title">Hooks</h2>
  <p><span class="font-bold">Je suis défini au mounted</span>: {{ message }}</p>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount, onBeforeUpdate, watch, watchEffect } from 'vue'

export default {
  name: 'xxx',

  setup() {
    const message = ref('')

    onMounted(() => {
      message.value = 'Hello World!'
    })

    onBeforeUnmount(() => {
    })

    onBeforeUpdate(() => {
    })

    /** Pas vraiment un hook mais voilà */
    watch(message, (value, oldValue) => {
      console.log(value, oldValue)
    })

    // Même chose sans spécifier la cible, c'est fait automatiquement
    watchEffect(() => console.log(message.value))

    return { message }
  }
}
</script>