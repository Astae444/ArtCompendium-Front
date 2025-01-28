<template>
    <v-container class="login-container" fill-height>
      <v-row justify="center" align="center">
        <v-col cols="12" md="4">
          <v-card class="pa-4" outlined>
            <v-card-title class="text-center">Connexion</v-card-title>
            
            <v-card-text>
              <v-form ref="loginForm" v-model="valid">
                <v-text-field
                  v-model="email"
                  label="Adresse email"
                  :rules="[rules.required, rules.email]"
                  prepend-inner-icon="mdi-email"
                  type="email"
                  outlined
                />
                
                <v-text-field
                  v-model="password"
                  label="Mot de passe"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  outlined
                />
  
                <v-btn
                  class="mt-4"
                  :disabled="!valid"
                  color="primary"
                  block
                  @click="submitLogin"
                >
                  Se connecter
                </v-btn>
              </v-form>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn to="/signup">
                Créer un compte
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    name: "Login",
    setup() {
      const router = useRouter();
      const email = ref("");
      const password = ref("");
      const valid = ref(false);
  
      // Validation des champs
      const rules = {
        required: (value: string) => !!value || "Ce champ est requis",
        email: (value: string) =>
          /.+@.+\..+/.test(value) || "Veuillez entrer une adresse email valide",
      };
  
      // Soumission du formulaire de connexion
      const submitLogin = () => {
        if (valid.value) {
          // Logique de connexion (à intégrer avec un backend ou un service d'authentification)
          console.log("Connexion réussie avec:", email.value, password.value);
          router.push({ name: "HomePage" });
        }
      };
  
      return {
        email,
        password,
        valid,
        rules,
        submitLogin,
      };
    },
  });
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
  }
  </style>
  