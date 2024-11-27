<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <div v-if="campus.length === 0">Cargando campus...</div>
      <v-list v-else>
        <v-list-item v-for="campusItem in campus" :key="campusItem.idCampus">
          <v-list-item-content>
            <v-list-item-title>{{ campusItem.nombre }}</v-list-item-title>
            <v-list-item-subtitle>{{
              campusItem.direccion
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-btn @click="changeDescription">Cambiar Descripción</v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getCampus } from "@/services/campusService"; // Importa el servicio
import { Campus } from "@/Interfaces/Campus";

// Estado local para los datos del campus
const title = ref<string>("Card Campus");
const description = ref<string>("Esta es una descripción inicial");
const campus = ref<Campus[]>([]); // Define el estado para almacenar la lista de campus

// Llama a la función getCampus cuando el componente se monte
onMounted(async () => {
  try {
    const data = await getCampus();
    campus.value = data; // Asigna los datos obtenidos a la variable 'campus'
  } catch (error) {
    console.error("Error al cargar los campus", error);
  }
});

// Función para cambiar la descripción
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
