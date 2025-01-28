<template>
  <v-card class="ma-4" width="100%">
    <v-row no-gutters>
      <v-col cols="auto">
        <v-img :src="contrib.image" height="75" width="75" />
      </v-col>
      <v-col cols="auto">
        <v-card-title>{{ contrib.title }}</v-card-title>
        <v-card-subtitle>{{ contrib.description }}</v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ContribCard",
  props: {
    contrib: {
      type: Object as PropType<{
        title: string;
        description: string;
        image: string;
      }>,
      required: true,
    },
  },
});
</script>
