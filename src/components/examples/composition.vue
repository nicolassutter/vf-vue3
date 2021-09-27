<script>
  import { reactive, toRefs } from 'vue'

  export default {
    name: 'xxx',

    setup() {
      const state = reactive({
        hello: 'world'
      })

      const xxx = () => {
        return ''
      }

      return { ...toRefs(state), xxx }
    }
  }
</script>