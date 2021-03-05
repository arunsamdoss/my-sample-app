<template>
  <div class="Edit">
    <!-- <carousel /> -->
    <Dashboard />
    <Table />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/dashboard/dashboard.vue'
import Table from '@/components/tables/table.vue'
// import carousel from '@/components/carousel.vue'


export default {
  name: 'Edit',
  components: {
    Table,
    Dashboard
    // carousel
  }
}
</script>
