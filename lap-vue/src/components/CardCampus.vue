<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-btn @click="changeDescription">Cambiar Descripción</v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const title = ref<string>("Card Campus");
const description = ref<string>("Esta es una descripción inicial");

function changeDescription() {
  description.value = "Descripción actualizada.";
}
</script>

<style scoped>
/* Estilos adicionales */
.v-card {
  max-width: 500px;
  margin: 20px;
}
</style>
