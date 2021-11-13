<template>
  <v-navigation-drawer permanent app clipped>
    <v-list v-for="(element, i) in drawer_elements" :key="i">
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>{{element.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            <NuxtLink :to="element.link">{{element.name}}</NuxtLink>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  name: "et-navigation",
  data() {
    return{
      "drawer_elements":[
        {"name":"Konto","link":"account","icon":"mdi-account-box"},
        {"name":"Wydatki - ten miesiąc","link":"dashboard","icon":"mdi-cash"},
        {"name":"Wydatki - histora","link":"history","icon":"mdi-cash-lock"}
      ]
    }
  }
}
</script>
<style lang="scss">
a, a:link, a:visited{
  text-decoration: none;
  color:whitesmoke;
}

</style>
