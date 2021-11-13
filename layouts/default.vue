<template>
  <v-app dark>
    <et-bar />
    <et-navigation />
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import EtNavigation from "../components/et-navigation";
import EtBar from "../components/et-bar";
export default {
  components: {EtNavigation, EtBar}
}
</script>

