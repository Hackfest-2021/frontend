<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left" v-for="header in headers" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td>
            <v-chip
              text-color="white"
              class="ma-2"
              :color="alertClasses[row.type]"
              v-text="row.type"
            >
            </v-chip>
          </td>
          <td>{{ row.driver }}</td>
          <td>
            <v-chip
              text-color="white"
              class="ma-2"
              :color="getSeverityClasses(row.severity)"
              v-text="row.severity"
            >
            </v-chip>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    alertClasses: {
      drowsy: 'deep-orange accent-1',
      hazard: 'red lighten-1',
      distracted: 'grey darken-1',
      'seat belt': 'teal lighten-3',
      'un authorized': 'yellow darken-1',
    },
  }),
  methods: {
    getSeverityClasses(severity) {
      return severity === 0.5
        ? 'green'
        : severity > 0.5
        ? 'red lighten-1'
        : 'yellow darken-1';
    },
  },
};
</script>
