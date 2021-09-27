<template>
  <button @click="$emit('update-stuff')">xxx</button>
  <button @click="click">xxx</button>
  <un-composant @click="click"></un-composant>
</template>

<script lang="ts">
/**
 * Le v-on:click`.natif` n'existe plus, il est appliqué par défaut. Donc pas besoin de faire v-on:click="$emit('click')"
 */
export default {
  name: 'xxx',

  // On défini les évenements, 
  emits: ['update-stuff'],

  setup(props, { emit }) {
    const click = () => {
      emit('update-stuff')
    }

    return { click }
  }
}
</script>