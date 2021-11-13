<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Wszystkie wydatki</v-card-title>
          <v-card-text>1000 {{get_user_info.currency}} </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Wydatki w tym miesiącu</v-card-title>
          <v-card-text>100 {{get_user_info.currency}} </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Wydatki w tym miesiącu</v-card-title>
          <v-card-text>100 {{get_user_info.currency}} </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Miesięczne kwota do wydania</v-card-title>
          <v-card-text>1000 {{get_user_info.currency}} </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>W tym miesiącu pozostało:</v-card-title>
          <v-card-text>900 {{get_user_info.currency}} </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Informacje o użytkowniu</v-card-title>
          <v-card-text>
            Imię: {{ get_user_info.name }} <br />
            Waluta:{{get_user_info.currency}}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>W tym miesiącu wydawano głównie na</v-card-title>
          <v-card-text>
            kategoria 1: 90 {{get_user_info.currency}} <br />
            kategoria 2: 10 {{get_user_info.currency}}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Wydatki z tagami:</v-card-title>
          <v-card-text>
            <v-chip>tag1</v-chip>
            <v-chip>tag2</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "account.vue",
  data() {
    return{
    }
  },
  computed:{
    ...mapGetters("user",["get_user_info"])
  }
}
</script>

<style scoped>

</style>
