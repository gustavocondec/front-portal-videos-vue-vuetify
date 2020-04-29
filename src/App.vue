<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-container>
        <DrawerBody></DrawerBody>

      </v-container>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width:200px">
        <v-icon>mdi-movie</v-icon>
        PelisPlus
      </v-toolbar-title>
      <BarraNavegacion></BarraNavegacion>

    </v-app-bar>
    <v-content>
      <v-container>
        <router-view>
        </router-view>
      </v-container>
    </v-content>
    <Pie></Pie>
  </v-app>
</template>

<script>
import BarraNavegacion from './components/BarraNavegacion'
import DrawerBody from './components/DrawerBody'
import Pie from './components/Pie'
// import Drawer from './components/Drawer'
export default {
  name: 'App',
  components: {
    BarraNavegacion,
    DrawerBody,
    Pie
  },
  data: () => ({
    drawer: true
  })

}
</script>
