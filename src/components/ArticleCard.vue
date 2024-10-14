<template>
  <v-card class="ma-4" max-width="400">
    <v-img :src="article.image" height="200px" />
    <v-card-title>{{ article.title }}</v-card-title>
    <v-card-text>{{ article.description }}</v-card-text>
    <v-card-actions>
      <v-btn color="primary">Lire plus</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ArticleCard",
  props: {
    article: {
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
