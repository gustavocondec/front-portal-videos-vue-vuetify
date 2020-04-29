<template>
  <v-slide-group show-arrows>
    <v-slide-item class="mx-2">
      <Pelicula />
    </v-slide-item>
    <v-slide-item class="mx-2">
      <Pelicula />
    </v-slide-item>
    <v-slide-item class="mx-2">
      <Pelicula />
    </v-slide-item>
    <v-slide-item class="mx-2">
      <Pelicula />
    </v-slide-item>
    <v-slide-item class="mx-2">
      <Pelicula />
    </v-slide-item>
  </v-slide-group>
</template>

<script>
import Pelicula from './Pelicula'
export default {
  components: { Pelicula }
}
</script>

<style>
</style>
