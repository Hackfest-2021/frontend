<template>
  <v-app>
    <v-header></v-header>
    <v-content></v-content>
  </v-app>
</template>

<script>
import VHeader from './components/Header.vue';
import VContent from './components/Content.vue';
export default {
  name: 'App',
  components: { VHeader, VContent },
};
</script>
