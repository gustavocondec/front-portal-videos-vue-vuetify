<template>

  <v-list dense>
    <div class="hidden-sm-and-up">
      <v-list-item>
        <v-btn
          to="/"
          text
        >
          <v-icon>mdi-home</v-icon>
          <span class="mr-2">Inicio</span>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
          to="series"
          text
        >
          <v-icon>mdi-television</v-icon>
          <span class="mr-2">Series</span>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
          to="estrenos"
          text
        >
          <v-icon>mdi-star</v-icon>
          <span class="mr-2">En estreno</span>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
          to="Peliculas-2020"
          text
        >
          <v-icon>mdi-calendar</v-icon>
          <span class="mr-2">Peliculas 2020</span>
        </v-btn>
      </v-list-item>
    </div>
    <v-subheader>GENEROS DE PELICULAS</v-subheader>
    <v-list-item-group>
      <v-list-item>
        <v-btn to="verpelicula">
          ver peli
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-icon>mdi-cube</v-icon>
        Accion
      </v-list-item>
      <v-list-item>
        <v-icon>mdi-cube</v-icon>
        Animacion
      </v-list-item>
      <v-list-item>
        <v-icon>mdi-cube</v-icon>
        Anime
      </v-list-item>
      <v-list-item>
        <v-icon>mdi-cube</v-icon>
        Artes Marciales
      </v-list-item>
      <v-list-item>
        <v-icon>mdi-cube</v-icon>
        Asesinos en serie
      </v-list-item>
      <v-list-item>
        <v-icon>mdi-cube</v-icon>
        Aventura
      </v-list-item>
      <v-list-item>
        <v-icon>mdi-cube</v-icon>
        Baile
      </v-list-item>
      <v-list-item>
        <v-icon>mdi-cube</v-icon>
        Belico
      </v-list-item>
      <v-list-item>
        <v-icon>mdi-cube</v-icon>
        Bibliografico
      </v-list-item>
      <v-list-item>
        <v-icon>mdi-cube</v-icon>
        Catastrofe
      </v-list-item>
      <v-list-item>
        <v-icon>mdi-cube</v-icon>
        Ciencia Ficcion
      </v-list-item>
      <v-list-item>
        <v-icon>mdi-cube</v-icon>
        Cine Adolescente
      </v-list-item>
    </v-list-item-group>
    <v-subheader>GENEROS DE PELICULAS</v-subheader>
    <v-row>
      <v-col>
        <v-btn
          text
          small
        >
          2020
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          text
          small
        >
          2020
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          text
          small
        >
          2020
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          text
          small
        >
          2020
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          text
          small
        >
          2020
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          text
          small
        >
          2020
        </v-btn>
      </v-col>
    </v-row>
  </v-list>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
  }
}
</script>

<style>
</style>
