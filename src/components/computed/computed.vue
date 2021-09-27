<template>
  <p>{{ total }}</p>
</template>

<script>
  import { reactive, computed } from 'vue'

  export default {
    name: 'xxx',

    setup() {
      const state = reactive({
        un: 1,
        deux: 2
      })

      const total = computed(() => state.un + state.deux)

      // Comment accéder à un computed ?

      /* ❌ */ console.log(total)
      /* ✅ */ console.log(total.value)

      return { total }
    }
  }
</script>