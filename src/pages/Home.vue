<template>
  <v-container>
    <!-- Section Recherche -->
    <v-row justify="center" class="mt-12 position-relative">
      <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="500" />
      <v-row
        class="overlay-content"
        justify="center"
        align="center"
        direction="column"
      >
        <h1 class="image-title">Découvrez le monde de l'art</h1>
        <p class="image-description">
          Explorez plus de 120 000 œuvres d'art provenant des plus grands musées
          et institutions culturelles du monde. Vous pouvez également contribuer
          au wiki et nous aider à grandir !
        </p>
        <v-text-field
          v-model="searchQuery"
          label="Rechercher un article..."
          variant="outlined"
          clearable
          prepend-inner-icon="mdi-magnify"
          class="search-field"
          @keyup.enter="performSearch"
        />
      </v-row>
    </v-row>

    <!-- Section Articles à la une -->
    <v-row class="mt-12">
      <v-col cols="12">
        <h2 class="text-center">Articles à la une</h2>
      </v-col>
    </v-row>

    <!-- Section Contributions récentes -->
    <v-row class="mt-12">
      <v-col cols="12">
        <h2 class="text-center">Contributions récentes</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomePage",

  setup() {
    const router = useRouter();
    const searchQuery = ref("");

    const performSearch = () => {
      if (searchQuery.value) {
        router.push({
          name: "SearchResult",
          query: { q: searchQuery.value },
        });
      }
    };

    return {
      searchQuery,
      performSearch,
    };
  },
});
</script>

<style scoped>
h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
}

.position-relative {
  position: relative;
}

.overlay-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  text-align: center;
  color: white;
}

.image-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 8px;
}

.image-description {
  font-size: 18px;
  margin-bottom: 16px;
}

.search-field {
  width: 100%;
}
</style>
