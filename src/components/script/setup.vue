<script setup lang="ts">
import { ref, computed, defineProps, defineComponent, defineEmits, reactive } from 'vue'
import { useStore } from 'vuex'
// import UnComposant from './un-composant.vue'
import { useGetters } from './../../modules/hooks/useGetters'

const component = defineComponent({
  name: 'Setup'
  /**
   * On a même pas besoin de faire { components: {...} }
   * 
   * On peut directement utiliser les composants dans le template
   */
})

const props = defineProps({
  message: {
    type: String,
    default: `Sans vouloir insister, j'ai hâte pour la raclette de Noel`
  }
})

const emits = defineEmits(['update-stuff'])
const title = ref(`Pourquoi le fromage c'est sympa`)
const description = computed(() => `Une description en rapport avec le fromage mais j'ai pas d'idée`)

const store = useStore()

/**
 * Création de mapGetter custom
 */
const { count: current_count } = useGetters(['count'])
const count = computed(() => store.state.count)

/**
 * Par contre dans le template, on est obligé d'utiliser `state.x`
 */
const state = reactive({ hello: 'Hello World!' })

const change_hello = (value: string) => state.hello = value

/**
 * Ici, pas besoin de `return` quoi que ce soit.
 */
</script>

<template>
  <h2 class="title">Script setup</h2>
  <h3>{{ title }}</h3>
  <p>{{ description }}</p>
  <blockquote>{{ message }}</blockquote>
  <blockquote>{{ state.hello }}</blockquote>
  <div class="space-x-2">
    <button class="underline" @click="change_hello('Bonjour!')">Dire bonjour</button>
    <button class="underline" @click="change_hello('Hello!')">Say Hello</button>
  </div>

  <p>-> Store direct dans le template - {{ store.state.count }}</p>
  <p>-> Store avec computed - {{ count }}</p>
  <p>-> Store avec "mapGetter" custom - {{ current_count }}</p>
  <!-- <un-composant></un-composant> -->
</template>