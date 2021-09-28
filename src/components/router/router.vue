<template>
  <h2 class="title">Router</h2>
  <pre><code>{{ code }}</code></pre>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'xxx',

  setup() {
    const router = useRouter()
    const route = useRoute()

    const name = route.name
    const params = route.params

    const code = computed(() => JSON.stringify(route, undefined, 2).trim())

    // router.push('/')

    return { code }
  }
}
</script>