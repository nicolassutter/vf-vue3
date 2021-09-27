<template>
  <un-composant v-model="hello">xxx</un-composant>

  <un-composant
    :modelValue="hello"
    @update:modelValue="hello = $event"
  >
    xxx
  </un-composant>

  <un-composant v-model:message="hello">xxx</un-composant>
</template>

<script lang="ts">
/**
 * Par défaut, un v-model se base sur:
 *  - PROP: `modelValue`
 *  - EVENT: `update:modelValue `
 * 
 * On peut précisier le v-model:
 *  v-model:message="hello"
 * 
 * Dans le composant `un-composant` il faut alors définir l'évenement `update:message` et utiliser la prop `message`
 */

export default {
  name: 'xxx'
}
</script>