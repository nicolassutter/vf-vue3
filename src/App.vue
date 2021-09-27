<script setup lang="ts">
import Computed from './components/computed/computed.vue'
import Reactive from './components/datas/reactive.vue'
import Ref from './components/datas/ref.vue'
import Refs from './components/refs/refs.vue'
import Hooks from './components/hooks/hooks.vue'
import Router from './components/router/router.vue'
import Store from './components/store/store.vue'
import Events from './components/events/events.vue'
import Styles from './components/styles/styles.vue'
import Props from './components/props/props.vue'
</script>

<template>
  <main class="prose lg:prose-xl p-5 lg:p-20 max-w-6xl mx-auto">
    <reactive></reactive>
    <ref></ref>
    <computed></computed>
    <refs></refs>
    <hooks></hooks>
    <router></router>
    <store></store>
    <events></events>
    <styles></styles>
    <props message="On se fait une fondue ?"></props>
  </main>
</template>

<style>
.title {
  @apply border-b border-gray-400 pb-5;
}
</style>