<template>
<v-container>
    <!-- Section Recherche -->
    <v-row justify="center" class="mt-12 position-relative">
      <v-img src="https://placehold.co/1000x500" height="500" class="rounded"/>
            <v-row class="overlay-content" justify="center" align="center" direction="column">
        <h1 class="image-title">Découvrez le monde de l'art</h1>
        <p class="image-description">
            Explorez plus de 120 000 œuvres d'art provenant des plus grands musées et institutions culturelles du monde. Vous pouvez également contribuer au wiki et nous aider à grandir !
        </p>
        <v-text-field
          v-model="searchQuery"
          label="Rechercher un article..."
          variant="outlined"
          clearable
          prepend-inner-icon="mdi-magnify"
          class="search-field"
        />
      </v-row>
    </v-row>

    <!-- Section Articles à la une -->
    <v-row class="mt-12">
      <v-col cols="12">
        <h2 class="text-center">Articles à la une</h2>
      </v-col>
      <v-col v-for="(article, index) in featuredArticles" :key="index" cols="12" md="4">
        <ArticleCard :article="article" />
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
import { defineComponent } from 'vue';
import ArticleCard from '@/components/ArticleCard.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    ArticleCard
  },
  data() {
    return {
      featuredArticles: [
        {
          title: 'Article 1',
          description: 'Description de l\'article 1.',
          image: 'https://placehold.co/400x200',
        },
        {
          title: 'Article 2',
          description: 'Description de l\'article 2.',
          image: 'https://placehold.co/400x200',
        },
        {
          title: 'Article 3',
          description: 'Description de l\'article 3.',
          image: 'https://placehold.co/400x200',
        },
      ],
    };
  },
});
</script>

<style scoped>
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