<template>
  <div class="Edit">
    <!-- <carousel /> -->
    <Table />
  </div>
</template>

<script>
// @ is an alias to /src

import Table from '@/components/tables/table.vue'
// import carousel from '@/components/carousel.vue'


export default {
  name: 'Edit',
  components: {
    Table,
    // carousel
  }
}
</script>
