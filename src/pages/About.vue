<template>
  <v-container class="mt-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-center mb-6">À propos de nous</h1>
        <v-card class="pa-6 elevation-2">
          <v-card-text>
            <p>
              Bienvenue sur notre site communautaire ! Ce projet, lancé en
              <strong>2023</strong>, est l’œuvre d’un passionné d’art, qui s’est
              donné pour mission de contribuer à
              <strong
                >la préservation d'une trace des œuvres d’art multiples et
                variées</strong
              >. Chaque œuvre présentée ici témoigne de notre patrimoine
              culturel, artistique et historique.
            </p>
            <p>
              Ce site fonctionne comme un
              <strong>wiki communautaire à but non lucratif</strong>, où chacun
              peut contribuer librement et participer à l’enrichissement du
              contenu de la plateforme. Nous croyons que la connaissance de
              l’art doit être partagée et accessible à tous.
            </p>
            <p>
              L’un des objectifs de ce projet est également de
              <strong
                >sensibiliser le plus de monde possible à l’importance de
                l’art</strong
              >. L’art est une clé essentielle pour
              <strong>comprendre l’histoire</strong>, et il joue un rôle
              fondamental dans notre capacité à
              <strong>analyser les enjeux de la société contemporaine</strong>.
              Grâce à lui, nous pouvons mieux saisir les évolutions sociales,
              culturelles et politiques qui façonnent notre monde.
            </p>
            <p class="text-center mt-4">
              Merci de faire partie de cette aventure ! Ensemble, nous pouvons
              continuer à enrichir cet espace et promouvoir l’importance de cet
              héritage dans notre société.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
