<template>
  <div class="home">
    <h2 class="my-2 py-2">Estrenos</h2>
    <ListaPeliculas></ListaPeliculas>
    <h2 class="mt-10">Peliculas Actualizadas</h2>
    <v-row>
      <v-col>
        <Pelicula></Pelicula>
      </v-col>
      <v-col>
        <Pelicula></Pelicula>
      </v-col>
      <v-col>
        <Pelicula></Pelicula>
      </v-col>
      <v-col>
        <Pelicula></Pelicula>
      </v-col>
      <v-col>
        <Pelicula></Pelicula>
      </v-col>
      <v-col>
        <Pelicula></Pelicula>
      </v-col>
      <v-col>
        <Pelicula></Pelicula>
      </v-col>
      <v-col>
        <Pelicula></Pelicula>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ListaPeliculas from '../components/ListaPeliculas'
import Pelicula from '../components/Pelicula'
export default {
  components: {
    ListaPeliculas,
    Pelicula
  },
  name: 'Home'
}
</script>
