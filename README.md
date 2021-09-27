# VF Vue 3.x

## Sommaire

1. [:Vue: d'ensemble](#example)
2. [Composition API](#example)
3. [Data](#example2)
4. [Computed](#third-example)
5. [Hooks](#fourth-examplehttpwwwfourthexamplecom)
6. [Router](#fourth-examplehttpwwwfourthexamplecom)
7. [Store](#fourth-examplehttpwwwfourthexamplecom)
8. [Events](#fourth-examplehttpwwwfourthexamplecom)

## Vue d'ensemble

- Plus besoin d'avoir de balise englobante

```vue
  <p>Enfant 1</p>
  <p>Enfant 2</p>
```

- Le modifier `.native` n'existe plus

- On doit maintenant mettre les `:key="xxx"` sur les templates et plus leurs enfants directs.

```vue
<template v-for="item in list" :key="item.id">
  <div>...</div>
  <span>...</span>
</template>
```

- Plus possible de créer des EventBus depuis Vue directement, il faut utiliser une petite lib `mitt` qui a la même syntaxe.

## Composition API

Nouvelles syntaxe de la partie `<script>` dans les composants.
Tout est maintnant dans une seule fonction `setup` qui retourne ce qui doit être disponible dans le `<template>`
