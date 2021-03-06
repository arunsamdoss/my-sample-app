<template>
<v-container>  
  <div class="todos">
    <h1 style="text-align: center;">Data Table</h1>
    <v-btn
        color="primary"
        @click="logout"
      >logout</v-btn>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab dark color="indigo" v-bind="attrs" v-on="on">
         <v-icon dark>+</v-icon>
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
                <v-text-field label="TITLE" required v-model="title"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="onSubmit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table :headers="headers" :items="allTodos" item-key="id">
      <!-- <template v-slot:item.actions="{ item }">>
       <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteItem(props.item)"
            >
              delete
            </v-icon>
          </td>
      </template>     -->
      <!-- eslint-disable vue/valid-v-slot -->
      <template v-slot:item.actions="{ item }">
        <v-btn
          small

          @click="deleteTodo(item.id)"
        >
          Delete
        </v-btn>

      </template>
    </v-data-table>
  </div>
</v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "Table",
  data() {
    return {
      dialog: false,
      title: '',
    }
  },
  computed: {
    ...mapGetters([ "allTodos" ]),
    // ...mapState({
    //   allTodos: (state) => {
    //     console.log(state.todos)
    //     return state.todos.todos;
    //   },
    // }),
    
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
        },
        {
         text: 'Actions', value:'actions', sortable: false 
        }
      ];
    },
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos", "addTodo", "deleteTodo", "logout"]),
        onSubmit(event) {
      event.preventDefault();
      this.addTodo(this.title);
      this.title = '';
  },
  }
};
</script>
