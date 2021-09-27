<template>
  <p ref="paragraph"></p>

  <ul>
    <li v-for="item in items"
      :key="item.id"
      :ref="setItemRef">
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'xxx',

  setup() {
    const paragraph = ref(null)

    const itemsRefs = ref([])

    const items = ref([
      {
        id: 'dasfaf'
      },
      {
        id: 'dfjk;akjfe'
      }
    ])

    const setItemRef = (el) => {
      if (el) {
        itemsRefs.value.push(el)
      }
    }

    return { paragraph, items, itemsRefs, setItemRef }
  }
}
</script>