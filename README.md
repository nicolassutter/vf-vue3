# VF Vue 3.x

## Sommaire

1. [:Vue: d'ensemble](#example)
2. [Composition API](#example)
3. [Data](#example2)
4. [Computed](#third-example)
5. [Hooks](#fourth-examplehttpwwwfourthexamplecom)
6. [Store](#fourth-examplehttpwwwfourthexamplecom)
7. [Events](#fourth-examplehttpwwwfourthexamplecom)

## Vue d'ensemble

- Plus besoin d'avoir de balise englobante

```vue
  <p>Enfant 1</p>
  <p>Enfant 2</p>
```

- Le modifier `.native` n'existe plus

## Composition API

Nouvelles syntaxe de la partie `<script>` dans les composants.
Tout est maintnant dans une seule fonction `setup` qui retourne ce qui doit être disponible dans le `<template>`
