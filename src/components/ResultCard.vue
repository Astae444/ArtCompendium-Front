<template>
  <v-card class="mb-4" @click="goToDetail">
    <v-row no-gutters>
      <v-col cols="auto">
        <v-img :src="image" height="100" width="100"/>
      </v-col>
      <v-col cols="8">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ artist }}</v-card-subtitle>
        <v-card-subtitle>{{ date }}</v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ResultCard",
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    artist: { type: String, required: true },
    date: { type: String, required: true },
  },
  setup(props) {
    const router = useRouter();

    const goToDetail = () => {
      const slug = props.title.toLowerCase().replace(/\s+/g, "-");
      router.push({ name: "ArtDetail", params: { slug } });
    };

    return {
      goToDetail,
    };
  },
});
</script>
