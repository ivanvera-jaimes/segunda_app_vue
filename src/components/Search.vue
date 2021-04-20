<template>
  <div class="container">
    <ul>
      <div v-for="(producto, i) in productos" :key="i">
      </div>
    </ul>
    <input v-model="filtro_Buscar" type="text" />
    {{ filtro_Buscar }}
    <button class="btn btn-primary" v-on:click="filterProductos">Buscar</button>
  </div>
</template>

<script>
import imag1 from "../assets/img/MAC.png";
import imag2 from "../assets/img/HP.png";
import imag3 from "../assets/img/Lenovo.png";
import imag4 from "../assets/img/asus.png";

export default {
  data: () => {
    return {
      productos: [
        {
          name: "Mac Air 2020",
          description: "Core I3 -8gb Ram -256gb SSD -Sellada",
          imagen: imag1,
          price: "4.394.009",
        },
        {
          name: "Portatil HP 255 67",
          description: "AMD Athlon  -4gb Ram -500gb  -Windows 10",
          imagen: imag2,
          price: "1.399.900",
        },
        {
          name: "Lenovo Ideapp L340",
          description: "Core I5 -8gb Ram -512gb SSD -Sellada",
          imagen: imag3,
          price: "3.299.999",
        },
        {
          name: "Portatil Asus X489ma",
          description: "Core I3 -8gb Ram -256gb SSD -Sellada",
          imagen: imag4,
          price: "1.219.900",
        },
      ],
    };
  },

  methods: {
    filterProductos: function() {
      this.msg = [];
      this.productos = this.productos.filter((produ) => {
        if (this.filtro_Buscar === produ.name) {
          this.msg = [produ.name, produ.description, produ.price];
          return (this.filtro_Buscar = this.msg);
        }
      });
    },
  },
};
</script>
