<template>
    <v-container class="signup-container" fill-height>
      <v-row justify="center" align="center">
        <v-col cols="12" md="4">
          <v-card class="pa-4" outlined>
            <v-card-title class="text-center">Inscription</v-card-title>
  
            <v-card-text>
              <v-form ref="signupForm" v-model="valid">
                <v-text-field
                  v-model="username"
                  label="Nom d'utilisateur"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-account"
                  outlined
                  dense
                />
  
                <v-text-field
                  v-model="email"
                  label="Adresse email"
                  :rules="[rules.required, rules.email]"
                  prepend-inner-icon="mdi-email"
                  type="email"
                  outlined
                  dense
                />
  
                <v-text-field
                  v-model="password"
                  label="Mot de passe"
                  :rules="[rules.required, rules.password]"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  outlined
                  dense
                />
  
                <v-text-field
                  v-model="confirmPassword"
                  label="Confirmer le mot de passe"
                  :rules="[rules.required, matchPassword]"
                  prepend-inner-icon="mdi-lock-check"
                  type="password"
                  outlined
                  dense
                />
  
                <v-btn
                  class="mt-4"
                  :disabled="!valid"
                  color="primary"
                  block
                  @click="submitSignup"
                >
                  S'inscrire
                </v-btn>
              </v-form>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="redirectToLogin">
                J'ai déjà un compte
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
    name: "Signup",
    setup() {
      const router = useRouter();
      const username = ref("");
      const email = ref("");
      const password = ref("");
      const confirmPassword = ref("");
      const valid = ref(false);
  
      // Validation des champs
      const rules = {
        required: (value: string) => !!value || "Ce champ est requis",
        email: (value: string) =>
          /.+@.+\..+/.test(value) || "Veuillez entrer une adresse email valide",
        password: (value: string) =>
          value.length >= 6 || "Le mot de passe doit contenir au moins 6 caractères",
      };
  
      // Validation personnalisée pour la confirmation du mot de passe
      const matchPassword = (value: string) =>
        value === password.value || "Les mots de passe ne correspondent pas";
  
      // Soumission du formulaire d'inscription
      const submitSignup = () => {
        if (valid.value) {
          // Logique d'inscription (à intégrer avec un backend ou un service d'authentification)
          console.log("Inscription réussie avec :", {
            username: username.value,
            email: email.value,
            password: password.value,
          });
          router.push({ name: "HomePage" });
        }
      };
  
      // Redirection vers la page de connexion
      const redirectToLogin = () => {
        router.push({ name: "Login" });
      };
  
      return {
        username,
        email,
        password,
        confirmPassword,
        valid,
        rules,
        matchPassword,
        submitSignup,
        redirectToLogin,
      };
    },
  });
  </script>
  
  <style scoped>
  .signup-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
  }
  </style>
  