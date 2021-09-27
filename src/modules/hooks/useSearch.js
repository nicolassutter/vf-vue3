import { ref } from 'vue'

export const useSearch = (/* On peut passer des params au besoin également */value = '') => {
  const search = ref(value)
  const results = ref([])

  const fetch = () => {
    // axios.get(xxx, { params: { search } })
    const response = [{ id: 'klasdjf;alfk'}, { id: 'dasl;kfa;f'}]
    results.value = response

    return response
  }

  return { search, results, fetch }
}