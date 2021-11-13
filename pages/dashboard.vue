<template>
  <div>
    <v-form>
      <v-container fluid>
        <v-row>
          <v-col>
          <v-text-field
            label="nazwa"
            v-model="expense.name"
          ></v-text-field>
          </v-col>
          <v-col>
            <v-combobox v-model="expense.category" label="kategoria" :items="categories"></v-combobox>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <v-text-field
            v-model="expense.price"
            label="Cena"
          ></v-text-field>
          </v-col>
          <v-col>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Data"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                :min="min_date"
                :max="max_date"
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col>
          <v-autocomplete
            chips
            multiple
            small-chips
            :items="tags"
            v-model="expense.tags"
            label="tagi"
          ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="warning" dark @click="create_expense">Dodaj</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  <v-card>
    <v-card-title>
      Wydatki w tym miesiącu
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="itemz"
    ></v-data-table>
  </v-card>
  </div>
</template>

<script lang="js">

export default {
  name: "dashbaord",
  data() {
    return{
      headers:[
        {text:"Nazwa",value:"name"},
        {text:"Kategoria",value:"category"},
        {text:"Wydatek (PLN)",value:"price"},
        {text:"Data",value:"date"},
        {text:"Tagi",value:"tags"},
      ],
      tags:["tag1","tag2"],
      itemz:[],
      categories:["zz","z1z"],
      date:"",
      expense:{
        name:"",
        category:"",
        price:"",
        date:"",
        tags:""
      }
    }
  },
  computed:{
    min_date(){
      const d = new Date();
      const month = d.getMonth()+1
      const year = d.getFullYear()
      return `${year}-${month}-01`
    },
    max_date(){
      const d = new Date();
      let month = d.getMonth()+2
      let year = d.getFullYear()
      const d2 = new Date(year,month,1)
      d2.setDate(d2.getDate() - 1)
      year = d2.getFullYear()
      month = d2.getMonth()
      const day = d2.getDate()
      return `${year}-${month}-${day}`
    }
  },
  mounted() {
    this.itemz = this.$store.getters["expenses/get_all_expenses"]
  },
  methods: {
    create_expense() {
      this.expense.date = this.date
      return this.$store.dispatch("expenses/add_new_expense", this.expense)
        .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
    },

  }
}
</script>

<style scoped>

</style>
