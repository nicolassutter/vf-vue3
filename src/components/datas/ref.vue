<template>
  <h2 class="title">Datas - Ref</h2>
  <p>{{ search }}</p>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'ref',

    setup() {
      const search = ref('valeur par défaut')

      // Comment accéder à la ref / data ?

      /* ❌ */ console.log(search)
      /* ✅ */ console.log(search.value)

      // Toutes les refs sont wrappées d'un objet propre à Vue, pour accéder à la valeur il faut toujours `.value`

      return { search }
    }
  }
</script>