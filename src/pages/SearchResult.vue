J'aimerai que le tag "closable" de v-chip n'apparaisse que pour les tags déjà
sélectionné

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

    <v-row class="mt-4">
      <!-- Colonne gauche pour les tags -->
      <v-col cols="12" md="3">
        <h2 class="text-center mb-4">Tags de recherche</h2>
        <v-chip
          v-for="(tag, index) in searchTags"
          :key="index"
          class="mr-2 mb-2"
          @click="filterResults(tag)"
        >
          {{ tag }}
        </v-chip>
      </v-col>

      <!-- Colonne centrale pour les résultats -->
      <v-col cols="12" md="9">
        <h2 class="text-center mb-4">
          Résultats de recherche pour "{{ searchQuery }}"
        </h2>
        <v-list class="w-75">
          <v-list-item-group
            v-for="(result, index) in searchResults"
            :key="index"
          >
            <ResultCard
              :image="result.image"
              :title="result.title"
              :artist="result.artist"
              :date="result.date"
            />
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
import ResultCard from "@/components/ResultCard.vue";

export default defineComponent({
  name: "SearchResult",
  components: { ResultCard },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const searchQuery = ref("");
    const searchResults = ref<any[]>([]);
    const searchTags = ref([
      "Impressionisme",
      "Renaissance",
      "Baroque",
      "Abstrait",
      "Romantisme",
      "Cubisme",
      "Dadaisme",
      "Surréalisme",
    ]);

    // Simuler des résultats de recherche
    const mockSearchResults = [
      {
        title: "La Joconde",
        artist: "Léonard de Vinci",
        description: "Description de l'article 1 sur l'art.",
        date: "1503",
        image: "https://placehold.co/100x100",
      },
      {
        title: "Article 2",
        artist: "Léonard de Vinci",
        description: "Description de l'article 2 sur la culture.",
        date: "2024-10-11",
        image: "https://placehold.co/100x100",
      },
      {
        title: "Article 3",
        artist: "Léonard de Vinci", 
        description: "Description de l'article 3 sur l'histoire.",
        date: "2024-10-12",
        image: "https://placehold.co/100x100",
      },
    ];

    onMounted(() => {
      searchQuery.value = (route.query.q as string) || "";
      // Filtrer ou simuler les résultats selon le searchQuery
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
        router.push({ name: "SearchResult", query: { q: searchQuery.value } });
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
