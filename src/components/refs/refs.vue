<template>
  <h2 class="title">Template Refs</h2>
  <p ref="paragraph">Mon paragraphe</p>

  <ul>
    <li v-for="item in items"
      :key="item.id"
      :ref="setItemRef">
      {{ item.content }}
    </li>
  </ul>

  Nombre de <code>li</code>: {{ content }}
</template>

<script lang="ts">
import { ref, onBeforeUpdate, onMounted } from 'vue'

export default {
  name: 'refs',

  setup() {
    const paragraph = ref(null)
    const content = ref(0)

    let itemsRefs: Element[] = []

    const items = ref([
      {
        id: 'dasfaf',
        content: 'Morbier'
      },
      {
        id: 'dfjk;akjfe',
        content: 'Reblochon'
      }
    ])

    // On clean les refs à chaque update
    onBeforeUpdate(() => { itemsRefs = [] })

    // Au mounted, on set la valeur initiale
    onMounted(() => { content.value = itemsRefs.length })

    const setItemRef = (el: Element) => {
      if (el) {
        itemsRefs.push(el)
      }
    }

    return { paragraph, items, setItemRef, content }
  }
}
</script>