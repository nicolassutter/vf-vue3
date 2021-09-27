# VF Vue 3.x

## Sommaire

1. :Vue: d'ensemble
2. Composition API
3. Data
4. Computed
5. Template Refs
6. Hooks
7. Router
8. Store
9. Events
10. Styles
11. Props

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

L'idée de la nouvelle syntaxe est de se rapprocher d'une écriture JS pure, pour simplifier l'utilisation de Typescript. Dans l'ancienne syntaxe il était compliqué de les faire cohabiter, maintenant le support est complet et franchement sympa.
