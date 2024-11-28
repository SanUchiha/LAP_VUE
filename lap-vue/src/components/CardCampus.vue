<template>
  <div>
    <div v-if="isLoading">Cargando campus...</div>
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
            @click="downloadInfo(campusItem.idCampus, campusItem.nombre)"
          >
            Mas información
          </v-btn>

          <v-btn
            color="green darken-1"
            variant="tonal"
            size="large"
            @click="openRegisterModal(campusItem)"
          >
            Apuntate
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <ModalFormRegister
      :isOpen="isModalOpen"
      :campus="selectedCampus"
      @close="closeRegisterModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getCampus, getInfoCampus } from "@/services/campusService";
import { Campus } from "@/Interfaces/Campus";
import ModalFormRegister from "./ModalFormRegister.vue";

const campus = ref<Campus[]>([]);
const isLoading = ref<boolean>(false);

const isModalOpen = ref<boolean>(false);
const selectedCampus = ref<Campus>();

onMounted(async () => {
  try {
    isLoading.value = true;
    const data = await getCampus();
    campus.value = data; // Asigna los datos obtenidos a la variable 'campus'
  } catch (error) {
    console.error("Error al cargar los campus", error);
  } finally {
    isLoading.value = false;
  }
});

const getCampusImage = (idCampus: number): string => {
  return `/images/cartel_${idCampus}.jpg`;
};

const downloadInfo = async (idCampus: number, nombreCampus: string) => {
  try {
    const pdfBlob = await getInfoCampus(idCampus);
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${nombreCampus}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error al descargar la información del campus", error);
  }
};

const openRegisterModal = (campus: Campus) => {
  selectedCampus.value = campus;
  isModalOpen.value = true;
};

const closeRegisterModal = () => {
  isModalOpen.value = false;
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
