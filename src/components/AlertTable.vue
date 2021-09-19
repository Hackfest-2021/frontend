<template>
  <v-table :headers="headers" :rows="rows"></v-table>
</template>
<script>
import VTable from './Table.vue';
import { fetchAlertData } from '../services';

export default {
  components: {
    VTable,
  },
  data: () => ({
    headers: ['Type', 'Driver', 'Severity'],
    rows: [],
    params: {},
  }),

  mounted() {
    const { type, driver } = this.$route.query;
    this.getAlertsData({ type, driver });
  },

  methods: {
    async getAlertsData(params) {
      const [error, data] = await fetchAlertData(params);
      if (error) {
        console.error('Error Occured');
      }
      this.rows = this.getRowData(data);
    },

    getRowData(data) {
      return data.map((el) => ({
        type: this.getAlertType(el.alert.alert_type),
        driver: el.trip.driver.username,
        severity: el.alert.alert_severity,
      }));
    },

    getAlertType(alertType) {
      const { name } = alertType;
      return name
        .substring(1, name.length - 1)
        .split(',')[0]
        .replaceAll("'", '');
    },
  },
};
</script>
<style></style>
