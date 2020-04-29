<template>
  <div>
    <v-row>
      <v-col>
        <v-img
          max-width="300px"
          src="https://static.noimg.net/serie/cover/original/179086850d27875822f629bd42bedc37.jpg"
        >
        </v-img>
      </v-col>
      <v-col>
        <h1>{{pelicula.titulo}}</h1>
        <p><strong>Titulo Original: </strong>{{pelicula.titulo}}</p>
        <p><strong>Fecha de Emision: </strong>{{pelicula.fechaEmision}}</p>
        <p><strong>Sipnosis del capitulo: </strong>{{pelicula.sipnosis}}</p>
      </v-col>
    </v-row>
    Reproduccion
    <v-tabs v-model="tab">
      <v-tab>
        Latino
      </v-tab>
      <v-tab>
        Subtitulado
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        hola
      </v-tab-item>
      <v-tab-item>
        Chau
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: null,
      pelicula: {
        titulo: 'Better call Saul: Temporada 5, capitulo 5',
        tituloOriginal: 'Dedicado a Max',
        fechaEmision: '16//06/2020',
        sipnosis: 'Mike hace un viaje improvisado fuera de la ciudad. Mientras ella y Jimmy se acercan a su campaña para ayudar a un cliente, Kim hace una llamada sorprendente.'
      }
    }
  }
}
</script>

<style>
</style>
