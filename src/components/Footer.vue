<template>
    <v-footer class="elevation-4">
      <v-container>
        <v-row align="center" justify="space-between">
          <!-- Copyright -->
          <v-col cols="12" md="6" class="text-center text-md-start">
            © {{ new Date().getFullYear() }} - Tous droits réservés.
          </v-col>
  
          <!-- Footer links -->
          <v-col cols="12" md="6" class="text-center text-md-end">
            <v-row class="justify-center justify-md-end" no-gutters wrap>
              <v-col cols="auto" class="mb-2">
                <v-btn flat to="/about">À propos</v-btn>
              </v-col>
              <v-col cols="auto" class="mb-2">
                <v-btn flat to="/terms">Conditions générales d'utilisation</v-btn>
              </v-col>
              <v-col cols="auto" class="mb-2">
                <v-btn flat to="/privacy">Confidentialité</v-btn>
              </v-col>
              <v-col cols="auto" class="mb-2">
                <v-btn flat to="/help">Aide</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Footer',
  });
  </script>
  
  <style scoped>
  /* Ajout d'un espacement minimal entre les boutons sur petits écrans */
  .mb-2 {
    margin-bottom: 8px;
  }
  </style>
  