<template>
  <v-card class="result-card" outlined>
    <v-row>
      <!-- Colonne pour l'image -->
      <v-col cols="4">
        <v-img :src="image" height="100%" width="100%" class="rounded" />
      </v-col>

      <!-- Colonne pour le titre et la date -->
      <v-col cols="8">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ date }}</v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResultCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.result-card {
  margin-bottom: 16px;
}

.v-card-title {
  font-size: 18px;
  font-weight: bold;
}

.v-card-subtitle {
  font-size: 14px;
  color: gray;
}
</style>
