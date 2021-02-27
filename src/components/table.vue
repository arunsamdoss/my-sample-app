<template>
    <section class="section-container">
      <h1>Todos</h1>
      <v-simple-table height="300px">
      <div class="todos">
        
             <thead>
          <tr>
            <th class="text-left">
              SI.NO 
            </th>
            <th class="text-left">
              NAME
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
          v-for="data in allTodos"
          v-bind:key="data.key"
          >
            <td>{{ data.id }}</td>
            <td>{{ data.title }}</td>
          </tr>
        </tbody>
      </div>
      </v-simple-table>

    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Todos",
    created() {
    this.fetchTodos()
  },
  methods:{
      ...mapActions(["fetchTodos"])
  },
  computed: mapGetters(["allTodos"]),

}
</script>
