import { computed } from 'vue'
import { useStore } from 'vuex'

export const useGetters = (/* On peut passer des params au besoin également */getters = []) => {
  const store = useStore()

  const entries = getters
    .map(getter => {
      const value = computed(() => store.getters[getter])
      return [getter, value]
    })

  return Object.fromEntries(entries)
}