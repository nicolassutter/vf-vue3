<template>
  <button @click="increment">{{ count }}</button>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  name: 'xxx',

  setup() {
    const store = useStore()

    // Plus de mapGetters
    const count = computed(() => store.state.count)
    // const count = computed(() => store.getters.count)

    const increment = computed(() => store.commit('increment'))

    return { count, increment }
  }
}
</script>