<template>
  <v-container class="my-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-center mb-6">
          Conditions Générales d'Utilisation (CGU)
        </h1>

        <h2>1. Objet des CGU</h2>
        <p>
          Les présentes Conditions Générales d'Utilisation ont pour objet de
          définir les modalités d'utilisation du site ArtCompendium (ci-après
          "le Site"), un wiki communautaire à but non lucratif visant à la
          préservation et la sensibilisation aux arts plastiques. En accédant et
          en utilisant le Site, l'utilisateur (ci-après "l'Utilisateur") accepte
          sans réserve ces CGU.
        </p>

        <h2>2. Fonctionnement du Site</h2>
        <p>
          ArtCompendium est une plateforme collaborative où les Utilisateurs
          inscrits peuvent librement créer, modifier, et enrichir des pages sur
          des œuvres, artistes, mouvements et genres artistiques. L'objectif est
          de rendre accessible un maximum d'informations sur les arts plastiques
          tout en respectant le patrimoine artistique et culturel.
        </p>

        <h2>3. Conditions d'inscription et collecte de données</h2>
        <p>
          Pour contribuer au Site, l'Utilisateur doit s'inscrire en fournissant
          les informations suivantes :
        </p>
        <ul>
          <li>Une adresse e-mail valide ;</li>
          <li>Un nom d'utilisateur ;</li>
          <li>Un mot de passe sécurisé ;</li>
        </ul>
        <p>
          ArtCompendium s'engage à respecter la confidentialité des données
          collectées et à ne pas les divulguer à des tiers, sauf obligation
          légale. Les Utilisateurs doivent s'assurer que leurs informations
          personnelles sont exactes et à jour.
        </p>

        <h2>4. Droits d'auteur et contenu du Site</h2>
        <h3>4.1. Œuvres du domaine public</h3>
        <p>
          La majorité des œuvres présentées sur le Site appartiennent au domaine
          public et peuvent être librement publiées.
        </p>

        <h3>4.2. Contenu soumis par les Utilisateurs</h3>
        <p>
          Les Utilisateurs peuvent ajouter du contenu provenant de sources
          externes, à condition de référencer ces sources de manière claire et
          précise. Tout contenu publié sur le Site doit respecter les droits
          d'auteur en vigueur. Si un auteur estime qu'une de ses œuvres
          protégées a été publiée sans autorisation, il peut contacter
          ArtCompendium pour demander son retrait.
        </p>

        <h3>4.3. Licence du contenu</h3>
        <p>
          Le contenu du Site est mis à disposition sous la licence Creative
          Commons BY-NC-SA (Attribution - Pas d’Utilisation Commerciale -
          Partage dans les Mêmes Conditions). Cela signifie que le contenu peut
          être réutilisé à condition de mentionner la source, de ne pas en faire
          un usage commercial, et de le partager sous la même licence.
        </p>

        <h2>5. Comportements interdits</h2>
        <p>Il est strictement interdit de publier sur le Site tout contenu :</p>
        <ul>
          <li>Offensant, diffamatoire, injurieux ou discriminatoire ;</li>
          <li>Violant les droits d'auteur ou les droits de tiers ;</li>
          <li>Contenant des informations erronées ou non vérifiées ;</li>
          <li>Constituant du spam, de la publicité ou de la promotion.</li>
        </ul>
        <p>
          Les Utilisateurs sont invités à respecter l'éthique et la véracité
          dans la publication des contenus. En cas de non-respect de ces règles,
          ArtCompendium se réserve le droit de suspendre ou de supprimer le
          compte de l'Utilisateur concerné.
        </p>

        <h2>6. Modération</h2>
        <p>
          Pour le moment, le Site ne dispose pas d'une équipe de modération
          dédiée. La communauté est encouragée à signaler tout contenu
          problématique via les outils disponibles sur la plateforme.
          ArtCompendium se réserve le droit de modifier ou de supprimer tout
          contenu jugé non conforme aux présentes CGU.
        </p>

        <h2>7. Limitation de responsabilité</h2>
        <p>
          ArtCompendium ne saurait être tenu responsable des erreurs, omissions,
          ou inexactitudes des contenus publiés par les Utilisateurs. Chaque
          Utilisateur est responsable des informations qu'il partage sur la
          plateforme. ArtCompendium décline toute responsabilité en cas de
          dommage résultant de l'utilisation du Site.
        </p>

        <h2>8. Propriété intellectuelle</h2>
        <p>
          L'ensemble des éléments du Site (graphismes, logo, design) est protégé
          par le droit de la propriété intellectuelle et ne peut être reproduit
          sans l'autorisation préalable de son ou ses créateur(s).
        </p>

        <h2>9. Modifications des CGU</h2>
        <p>
          ArtCompendium se réserve le droit de modifier les présentes CGU à tout
          moment. Les Utilisateurs seront informés des modifications par le
          biais du Site. En continuant à utiliser le Site après la publication
          des modifications, les Utilisateurs acceptent les nouvelles CGU.
        </p>

        <h2>10. Contact</h2>
        <p>
          Pour toute question ou demande de retrait de contenu, merci de
          contacter ArtCompendium à l'adresse suivante :
          <i>kb9legoat@gmail.com</i>.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TermsPage",
});
</script>

<style scoped>
h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

h2 {
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

h3 {
  font-family: Arial, sans-serif;
  font-size: 1.3rem;
  margin-top: 1.2rem;
  margin-bottom: 0.8rem;
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}
</style>
