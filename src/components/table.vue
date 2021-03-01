<template>
<v-container>  
  <div class="todos">
    <h1 style="text-align: center;">Datatable</h1>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="text-center" color="primary" dark v-bind="attrs" v-on="on">
          ADD TITLE
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">DATA</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="TITLE" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
     <v-btn
        depressed
        color="primary"
      ><router-link to="/"></router-link>Home</v-btn>
    <v-data-table :headers="headers" :items="allTodos" item-key="id">
    </v-data-table>
  </div>
</v-container>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  name: "Table",
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapState({
      allTodos: (state) => {
        return state.todos;
      },
    }),
    headers() {
      return [
        {
          text: "SI.NO",
          align: "start",

          value: "id",
        },
          {
          text: "Title",
          align: "start",
          sortable: false,
          value: "title",
        }
      ];
    },
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos"]),
  },
};
</script>
