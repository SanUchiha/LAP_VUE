<template>
  <div>
    <div v-if="campus.length === 0">Cargando campus...</div>
    <div v-else>
      <v-card
        v-for="campusItem in campus"
        :key="campusItem.idCampus"
        class="campus-card"
      >
        <v-card-title>{{ campusItem.nombre }}</v-card-title>
        <v-card-subtitle>{{ campusItem.direccion }}</v-card-subtitle>
        <v-card-text>
          <v-img
            :src="getCampusImage(campusItem.idCampus)"
            alt="Imagen del campus"
            aspect-ratio="16/9"
          ></v-img>
        </v-card-text>
        <v-card-actions class="button-actions">
          <v-btn
            color="blue darken-1"
            variant="tonal"
            size="large"
            @click="downloadInfo(campus.idCampus)"
          >
            Mas información
          </v-btn>

          <v-btn
            color="green darken-1"
            variant="tonal"
            size="large"
            @click="handleFormRegister()"
          >
            Apuntate
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getCampus } from "@/services/campusService";
import { Campus } from "@/Interfaces/Campus";

const campus = ref<Campus[]>([]);

onMounted(async () => {
  try {
    const data = await getCampus();
    campus.value = data; // Asigna los datos obtenidos a la variable 'campus'
  } catch (error) {
    console.error("Error al cargar los campus", error);
  }
});

const getCampusImage = (idCampus: number): string => {
  return `/images/cartel_${idCampus}.jpg`;
};

const downloadInfo = (idCampus: number): string => {
  //
};

const handleFormRegister = (idCampus: number): string => {
  //
};
</script>

<style scoped>
.campus-card {
  margin: 20px auto;
  max-width: 400px;
}

.v-img {
  border-bottom: 1px solid #ccc;
}

.button-actions {
  display: flex;
  justify-content: space-between;
}
</style>
