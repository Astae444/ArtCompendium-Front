<template>
  <v-container>
    <!-- Section Recherche -->
    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="8">
        <v-text-field
          v-model="searchQuery"
          label="Rechercher un article..."
          variant="outlined"
          clearable
          prepend-inner-icon="mdi-magnify"
          class="search-field"
          @keyup.enter="performSearch"
        />
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <!-- Colonne gauche pour les tags -->
      <v-col cols="12" md="3">
        <h2 class="text-center">Tags de recherche</h2>
        <v-btn
          v-for="(tag, index) in searchTags"
          :key="index"
          class="mr-2 mb-2"
          @click="filterResults(tag)"
          outlined
          flat
          rounded
        >
          {{ tag }}
        </v-btn>
      </v-col>

      <!-- Colonne centrale pour les résultats -->
      <v-col cols="12" md="9">
        <h2 class="text-center">
          Résultats de recherche pour "{{ searchQuery }}"
        </h2>
        <v-list>
          <v-list-item-group
            v-for="(result, index) in searchResults"
            :key="index"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ result.title }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  result.description
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <p v-if="searchResults.length === 0" class="text-center">
          Aucun résultat trouvé.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "SearchResult",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const searchQuery = ref("");
    const searchResults = ref<any[]>([]); // Remplacez `any` par le type approprié
    const searchTags = ref([
      "Impressionisme",
      "Renaissance",
      "Baroque",
      "Abstrait",
      "Romantisme",
    ]);

    // Simuler des résultats de recherche
    const mockSearchResults = [
      {
        title: "Article 1",
        description: "Description de l'article 1 sur l'art.",
      },
      {
        title: "Article 2",
        description: "Description de l'article 2 sur la culture.",
      },
      {
        title: "Article 3",
        description: "Description de l'article 3 sur l'histoire.",
      },
    ];

    onMounted(() => {
      searchQuery.value = (route.query.q as string) || "";
      // Filtrer ou simuler les résultats selon le `searchQuery`
      searchResults.value = mockSearchResults.filter((result) =>
        result.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    // Fonction pour filtrer les résultats selon le tag sélectionné
    const filterResults = (tag: string) => {
      searchResults.value = mockSearchResults.filter((result) =>
        result.title.toLowerCase().includes(tag.toLowerCase())
      );
    };

    // Fonction pour effectuer une nouvelle recherche
    const performSearch = () => {
      if (searchQuery.value) {
        // Redirigez vers la même page avec le nouveau query string
        router.push({ name: "SearchResult", query: { q: searchQuery.value } });

        // Filtrer les résultats selon la recherche
        searchResults.value = mockSearchResults.filter((result) =>
          result.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }
    };

    return {
      searchQuery,
      searchResults,
      searchTags,
      filterResults,
      performSearch,
    };
  },
});
</script>

<style scoped>
.text-center {
  text-align: center;
}
.search-field {
  width: 100%;
}
</style>
