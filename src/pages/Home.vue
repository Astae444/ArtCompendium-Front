<template>
  <v-container>
    <!-- Section Recherche -->
    <v-row justify="center" class="mt-12 position-relative">
      <v-img
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        max-height="500"
      />
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
          label="Rechercher une œuvre, un artiste, un mouvement..."
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

      <v-col
        v-for="(article, index) in featuredArticles"
        :key="index"
        cols="12"
        md="4"
      >
        <ArticleCard :article="article" />
      </v-col>
    </v-row>

    <!-- Section Contributions récentes -->
    <v-row class="mt-12">
      <v-col cols="12">
        <h2 class="text-center">Contributions récentes</h2>

        <v-row
        v-for="(contrib, index) in featuredContrib"
        :key="index"
      >
        <ContribCard :contrib="contrib" />
      </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import ArticleCard from "@/components/ArticleCard.vue";

export default defineComponent({
  name: "HomePage",
  components: { ArticleCard },

  setup() {
    const router = useRouter();
    const searchQuery = ref("");

    // Articles à la une
    const featuredArticles = ref([
      {
        title: "L'Impressionnisme : Une nouvelle ère artistique",
        description:
          "Découvrez comment l'Impressionnisme a changé le monde de l'art.",
        image: "https://placehold.co/400x200",
        date: "2024-10-10",
      },
      {
        title: "Les mystères de la Renaissance",
        description:
          "Explorez les secrets et les chefs-d'œuvre de la Renaissance.",
        image: "https://placehold.co/400x200",
        date: "2024-10-11",
      },
      {
        title: "L'Art Abstrait expliqué aux débutants",
        description: "Une introduction à l'art abstrait pour les novices.",
        image: "https://placehold.co/400x200",
        date: "2024-10-12",
      },
    ]);
    // Contrib à la une
    const featuredContrib = ref([
      {
        title: "La Joconde",
        description:
          "Mise à jour de la date de création de la Joconde.",
        image: "https://placehold.co/75x75",
      },
      {
        title: "Article 1",
        description:
          "Description très complète de la contribution",
        image: "https://placehold.co/75x75",
      },
      {
        title: "Article 2",
        description: "Description très complète de la contribution",
        image: "https://placehold.co/75x75",
      },
    ]);

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
      featuredArticles,
      featuredContrib,
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

@media (max-width: 960px) {
  .image-description {
    text-align: center;
    margin-bottom: 16px;
  }
  .image-title {
    font-size: 24px;
  }
  .image-description {
    display: none;
  }
}
</style>
