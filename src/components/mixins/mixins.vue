<template>
  <form @submit.prevent="fetch">
    <input type="search" v-model="search" />
  </form>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount, onBeforeUpdate, watch, watchEffect } from 'vue'
/**
 * Avec cette nouvelle syntaxe, il faut limiter l'utilisation de mixin
 * 
 * Cependant on peut créer des fichiers ayant la même utilité que des mixins, mais utilisants la syntaxe de composition.
 * 
 * Ces modules auront une syntaxe similaire aux `useRouter` et `useStore`
 * 
 * @see https://v3.vuejs.org/guide/mixins.html#drawbacks
 */
import { useSearch } from './../../modules/hooks/useSearch'

export default {
  name: 'xxx',

  setup() {
    /** On récup les valeurs du hook custom */
    const { search, fetch, results } = useSearch()

    return { search, fetch, results }
  }
}
</script>