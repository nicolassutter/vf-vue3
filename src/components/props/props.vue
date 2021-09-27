<template>
  <p>{{ message }}</p>
  <p>{{ _message }}</p>
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

    const _message = computed(() => props.message + '!!!')

    return { _message }
  }
}
</script>