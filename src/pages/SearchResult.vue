<template>
  <v-container>
    <h1>Résultats de recherche pour "{{ searchQuery }}"</h1>
    <p v-if="!searchQuery">Veuillez entrer un terme de recherche.</p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "SearchResult",
  setup() {
    const route = useRoute();
    const searchQuery = ref("");

    onMounted(() => {
      searchQuery.value = (route.query.q as string) || "";
    });

    return { searchQuery };
  },
});
</script>

<style scoped></style>
