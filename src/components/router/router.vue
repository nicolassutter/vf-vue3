<template>
  <p>{{ $route.name }}</p>
</template>

<script lang="ts">
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'xxx',

  setup() {
    const router = useRouter()
    const route = useRoute()

    const name = route.name
    const params = route.params

    router.push('/')

    return {}
  }
}
</script>