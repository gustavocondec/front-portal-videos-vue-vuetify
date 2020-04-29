<template>
  <div
    class="d-flex align-center justify-space-between"
    style="width:100%"
  >
    <div class="hidden-sm-and-down align-center">

      <v-btn
        to="/"
        text
      >
        <v-icon>mdi-home</v-icon>
        <span class="mr-2">Inicio</span>
      </v-btn>
      <v-btn
        to="series"
        text
      >
        <v-icon>mdi-television</v-icon>
        <span class="mr-2">Series</span>
      </v-btn>
      <v-btn
        to="estrenos"
        text
      >
        <v-icon>mdi-star</v-icon>
        <span class="mr-2">En estreno</span>
      </v-btn>
      <v-btn
        to="Peliculas-2020"
        text
      >
        <v-icon>mdi-calendar</v-icon>
        <span class="mr-2">Peliculas 2020</span>
      </v-btn>
    </div>
    <div class="d-flex align-center ml-auto">
      <v-text-field
        solo-inverted
        hide-details
        label="Search"
        class="hidden-sm-and-down"
      >
      </v-text-field>
      <v-btn text>
        <v-icon
          color="green"
          x-large
          left
        >mdi-magnify</v-icon>
      </v-btn>

      User
      <v-avatar>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>

    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {

  methods: {
    ...mapActions(['cambiarDrawer'])
  }
}
</script>

<style>
</style>
