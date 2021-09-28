<template>
  <h2 class="title">Store</h2>
  <button
    class="px-3 bg-blue-500 py-1 rounded text-white hover:bg-blue-400 transition-colors"
    @click="increment"
  >
    Clicks: {{ count }}
  </button>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  name: 'store',

  setup() {
    const store = useStore()

    // Plus de mapGetters
    const count = computed(() => store.state.count)
    // const count = computed(() => store.getters.count)

    const increment = () => store.commit('increment')

    return { count, increment }
  }
}
</script>