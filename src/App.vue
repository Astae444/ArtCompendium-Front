<template>
  <v-app>
    <Header />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

v-main {
  min-height: calc(100vh - 64px);
}

</style>
