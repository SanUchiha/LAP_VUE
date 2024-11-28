<template>
  <v-dialog v-model="localIsOpen" max-width="800px" persistent>
    <v-card>
      <v-card-title>
        Registro
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
        <v-form ref="formRef" @submit.prevent="submitForm">
          <v-container>
            <v-row justify="center">
              <v-col cols="12" md="6">
                <v-text-field
                  label="Nombre"
                  v-model="formData.nombre"
                  type="text"
                  :rules="[rules.required]"
                  :error="errors.nombre"
                  required
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Primer apellido"
                  v-model="formData.primerApellido"
                  :rules="[rules.required]"
                  :error="errors.primerApellido"
                  required
                  type="text"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Segundo apellido"
                  v-model="formData.segundoApellido"
                  type="text"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="DNI Participante"
                  v-model="formData.dniparticipante"
                  :rules="[rules.required]"
                  required
                  type="text"
                  :error="errors.dniparticipante"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.fechaNacimiento"
                  label="Fecha de nacimiento"
                  type="date"
                  :rules="[rules.required, rules.validDate]"
                  required
                  :error="errors.fechaNacimiento"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Dirección"
                  v-model="formData.direccionParticipante"
                  :rules="[rules.required]"
                  required
                  type="text"
                  :error="errors.direccionParticipante"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Localidad"
                  v-model="formData.localidad"
                  :rules="[rules.required]"
                  required
                  type="text"
                  :error="errors.localidad"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Código postal"
                  v-model="formData.codigoPostal"
                  :rules="[rules.required]"
                  required
                  type="number"
                  :error="errors.codigoPostal"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-radio-group
                  inline
                  label="¿Tiene lesiones?"
                  :rules="[rules.required]"
                  v-model="formData.lesiones"
                  required
                  :error="errors.lesiones"
                >
                  <v-radio label="SI" value="true"></v-radio>
                  <v-radio label="NO" value="false"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="formData.lesiones === 'true'"
                  label="Describa las lesiones"
                  v-model="formData.descripcionLesiones"
                  type="text"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-radio-group
                  inline
                  label="¿Toma medicación?"
                  v-model="formData.tomaMedicacion"
                  :rules="[rules.required]"
                  required
                  :error="errors.tomaMedicacion"
                >
                  <v-radio label="SI" value="true"></v-radio>
                  <v-radio label="NO" value="false"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="formData.tomaMedicacion === 'true'"
                  label="Describa la medicación"
                  v-model="formData.descripcionMedicacion"
                  type="text"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-radio-group
                  inline
                  label="¿Tiene alergias?"
                  v-model="formData.alergias"
                  :rules="[rules.required]"
                  required
                  :error="errors.alergias"
                >
                  <v-radio label="SI" value="true"></v-radio>
                  <v-radio label="NO" value="false"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="formData.alergias === 'true'"
                  label="Describa las alergias"
                  v-model="formData.descripcionAlergias"
                  type="text"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Nombre del tutor"
                  v-model="formData.nombreTutor"
                  :rules="[rules.required]"
                  required
                  type="text"
                  :error="errors.nombreTutor"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Primer apellido del tutor"
                  v-model="formData.primerApellidoTutor"
                  :rules="[rules.required]"
                  required
                  type="text"
                  :error="errors.primerApellidoTutor"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Segundo apellido del tutor"
                  v-model="formData.segundoApellidoTutor"
                  type="text"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="DNI Tutor"
                  v-model="formData.dnitutor"
                  :rules="[rules.required]"
                  required
                  type="text"
                  :error="errors.dnitutor"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Teléfono principal"
                  v-model="formData.telefonoPrincipal"
                  :rules="[rules.required, rules.phone]"
                  required
                  type="number"
                  :error="errors.telefonoPrincipal"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Teléfono secundario"
                  v-model="formData.telefonoSecundario"
                  type="number"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Email"
                  v-model="formData.correoParticipante"
                  :rules="[rules.required, rules.email]"
                  required
                  type="email"
                  :error="errors.correoParticipante"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-radio-group
                  inline
                  label="¿Permite fotos?"
                  v-model="formData.permiteFotos"
                  :rules="[rules.required]"
                  required
                  :error="errors.permiteFotos"
                >
                  <v-radio label="SI" value="true"></v-radio>
                  <v-radio label="NO" value="false"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" md="6">
                <v-select
                  label="Talla de camiseta"
                  :items="['6', '8', '10', 'S', 'M', 'L', 'XL']"
                  v-model="formData.tallaCamiseta"
                  :rules="[rules.required]"
                  required
                  :error="errors.tallaCamiseta"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="green darken-1"
          variant="tonal"
          size="large"
          @click="submitForm"
        >
          Registrar
        </v-btn>
        <v-btn
          color="grey darken-1"
          variant="tonal"
          size="large"
          @click="close"
        >
          Cancelar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { Participante, ParticipanteDTO } from "@/Interfaces/Campus";
import { ref, watch, defineProps, defineEmits, reactive, PropType } from "vue";
import { Campus } from "@/Interfaces/Campus";

const props = defineProps({
  isOpen: Boolean,
  campus: Object as PropType<Campus>,
});

const emit = defineEmits(["close", "register"]);

const localIsOpen = ref(props.isOpen);

watch(
  () => props.isOpen,
  (newValue) => {
    localIsOpen.value = newValue;
  }
);

const formData = ref<Partial<Participante>>({
  idCampus: props.campus?.idCampus ?? 0,
});

const formatFecha = (fechaString: string) => {
  const fecha = new Date(fechaString);
  const year = fecha.getFullYear();
  const month = ("0" + (fecha.getMonth() + 1)).slice(-2);
  const day = ("0" + fecha.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const rules = {
  required: (value: any) => !!value || "Este campo es obligatorio.",
  email: (value: string | null) =>
    /.+@.+\..+/.test(value || "") || "Formato de correo inválido.",
  validDate: (value: string | null) => {
    const selectedDate = new Date(value as string);
    const currentDate = new Date();
    return (
      selectedDate < currentDate ||
      "La fecha debe ser menor que la fecha actual."
    );
  },
  phone: (value: string) =>
    /^\d{9}$/.test(value) || "El número de teléfono debe tener 9 dígitos.",
};

const errors = reactive({
  nombre: false,
  primerApellido: false,
  dniparticipante: false,
  fechaNacimiento: false,
  direccionParticipante: false,
  localidad: false,
  codigoPostal: false,
  lesiones: false,
  tomaMedicacion: false,
  alergias: false,
  nombreTutor: false,
  primerApellidoTutor: false,
  dnitutor: false,
  telefonoPrincipal: false,
  correoParticipante: false,
  permiteFotos: false,
  tallaCamiseta: false,
});

const validateForm = () => {
  errors.nombre = !formData.value.nombre;
  errors.primerApellido = !formData.value.primerApellido;
  errors.correoParticipante =
    !formData.value.correoParticipante ||
    !rules.email(formData.value.correoParticipante);
  errors.fechaNacimiento =
    !formData.value.fechaNacimiento ||
    !rules.validDate(formData.value.fechaNacimiento);
  errors.telefonoPrincipal =
    !formData.value.telefonoPrincipal &&
    !rules.phone(formData.value.telefonoPrincipal!);
  errors.alergias = !formData.value.alergias;
  errors.codigoPostal = !formData.value.codigoPostal;
  errors.direccionParticipante = !formData.value.direccionParticipante;
  errors.dniparticipante = !formData.value.dniparticipante;
  errors.dnitutor = !formData.value.dnitutor;
  errors.lesiones = !formData.value.lesiones;
  errors.localidad = !formData.value.localidad;
  errors.nombreTutor = !formData.value.nombreTutor;
  errors.permiteFotos = !formData.value.permiteFotos;
  errors.primerApellidoTutor = !formData.value.primerApellidoTutor;
  errors.tallaCamiseta = !formData.value.tallaCamiseta;
  errors.tomaMedicacion = !formData.value.tomaMedicacion;

  const formIsValid = Object.values(errors).every((error) => !error);

  if (formIsValid) {
    submitForm();
  } else {
    alert("Por favor, completa todos los campos requeridos correctamente.");
  }
};

const formRef = ref();

const close = () => emit("close");

const submitForm = () => {
  if (formRef.value) {
    formRef.value.validate();
    try {
      const medi;
      const request: ParticipanteDTO = {
        nombre: formData.value.nombre!,
        primerApellido: formData.value.primerApellido!,
        segundoApellido: formData.value.segundoApellido,
        dniparticipante: formData.value.dniparticipante!,
        fechaNacimiento: formData.value.fechaNacimiento!,
        direccionParticipante: formData.value.direccionParticipante!,
        localidad: formData.value.localidad!,
        codigoPostal: formData.value.codigoPostal!,
        lesiones: formData.value.lesiones,
        descripcionLesiones: formData.value.descripcionLesiones,
        tomaMedicacion: formData.value.tomaMedicacion!,
        descripcionMedicacion: formData.value.descripcionMedicacion,
        alergias: formData.value.alergias!,
        descripcionAlergias: formData.value.descripcionAlergias,
        nombreTutor: formData.value.nombreTutor!,
        primerApellidoTutor: formData.value.primerApellidoTutor!,
        segundoApellidoTutor: formData.value.segundoApellidoTutor,
        dnitutor: formData.value.dnitutor!,
        telefonoPrincipal: formData.value.telefonoPrincipal!,
        telefonoSecundario: formData.value.telefonoSecundario,
        correoParticipante: formData.value.correoParticipante!,
        permiteFotos: formData.value.permiteFotos!,
        autorizacion: true,
        firma: "",
        idCampus: props.campus,
        tallaCamiseta: formData.value.tallaCamiseta,
      };
      console.log("data", request);
      emit("register");
    } catch (error) {
      console.error("Error al guardar un participante");
    }
  } else {
    console.error("Form reference is not defined");
  }
};
watch(
  () => props.isOpen,
  (newValue) => {
    if (!newValue) formData.value = { idCampus: props.campus?.idCampus ?? 0 };
  }
);
</script>

<style scoped>
/* Estilos personalizados */
</style>
