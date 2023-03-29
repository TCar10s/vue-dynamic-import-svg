<template>
  <!--
      La etiqueta <component> de Vue permite la carga dinámica de componentes
  -->
  <component :is="dynamicComponent" />
</template>

<script>
/*
    Componente para importar SVG dinamicamente mediante su nombre (prop)
    El componente se complementa con la librería vite-svg-loader
*/
import { defineAsyncComponent } from 'vue';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    dynamicComponent() {
      // Importación dinámica de SVG
      return defineAsyncComponent(() => import(`../assets/${this.name}.svg`));
    },
  },
};
</script>
