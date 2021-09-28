<template>
  <h2 class="title">Props</h2>
  <p>{{ message }}</p>
  <p>{{ current_message }}</p>
</template>

<script lang="ts">
import { computed, toRefs, toRef } from 'vue'

export default {
  name: 'xxx',

  props: {
    message: {
      type: String,
      default: ''
    }
  },

  /**
   * On récup les props ici, on peut les déstructurer au besoin
   * 
   * WARNING: si on déstructure ici, on perd la réactivité
   */
  setup(props) {
    // Si on veut garder la réactivité en déstrucurant, on fait:
    // const { message } = toRefs(props)
    // OU
    // const message = toRef(props, 'message')

    const current_message = computed(() => props.message + ' :cheese:')

    return { current_message }
  }
}
</script> 