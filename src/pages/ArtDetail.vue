<template>
  <v-container>
    <v-row justify="center" class="mt-12">
      <v-col cols="12" md="8">
        <h1 class="ma-2">{{ title }}</h1>
        <p class="ma-2">Artist</p>
        <p class="ma-2">Date - Pays</p>
        <v-img
          class="mt-6 mb-6"
          :width="1500"
          cover
          src="https://placehold.co/1500x1000"
        ></v-img>
        <p class="ma-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          placeat. Similique laborum quidem, optio soluta facilis consectetur
          nulla fuga iste inventore autem cumque explicabo voluptatibus porro ut
          repudiandae. Autem repellendus excepturi ratione mollitia? Voluptates
          laborum facere minus omnis consequatur officiis voluptas, nam sint,
          saepe unde ab excepturi quae vel ea laudantium eaque quaerat
          cupiditate, maxime veniam! Voluptates dolores dolorem quibusdam,
          quaerat nam quisquam illo, vero, cupiditate vitae eaque dignissimos
          nemo molestias est dicta? Odit, incidunt cupiditate ab tempore ea
          cumque illum aperiam fugiat. Alias reprehenderit ea accusamus magnam
          illo voluptatum necessitatibus quasi doloribus natus harum ad, a non
          ab doloremque?
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArtDetail",
  props: {
    slug: { type: String, required: true },
  },
  computed: {
    title() {
      return this.slug.replace(/-/g, " ").toUpperCase();
    },
  },
});
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
