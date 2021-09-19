<template>
  <v-main>
    <v-container class="container"> <alert-table></alert-table> </v-container>
  </v-main>
</template>
<script>
import AlertTable from './AlertTable.vue';
export default {
  components: {
    AlertTable,
  },
};
</script>

<style scoped>
.container {
  margin-top: 4em;
  padding: 2em;
}
</style>
