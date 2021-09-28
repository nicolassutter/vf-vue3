<template>
  <!-- Chaque clé est maintenant une ref, on peut la référencer ici -->
  <h2 class="title">Datas - Reactive</h2>
  <p>{{ un }}</p>
  <p>{{ deux }}</p>
</template>

<script>
  import { toRefs, reactive } from 'vue'

  export default {
    name: 'reactive',

    setup() {
      const state = reactive({
        un: 'un',
        deux: 'deux'
      })

      // Comment accéder à une ref / data ?

      /* ✅ */ console.log(state.un)
      /* ✅ */ console.log(state.deux)

      // Ici pas besoin de `.value`

      // Converti chaque clé en une ref simple puis les regroupe dans un object.
      // Enfin, on les spread dans le return
      return { ...toRefs(state) }
    }
  }
</script>