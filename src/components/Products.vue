<script>
import imag1 from "../assets/img/MAC.png";
import imag2 from "../assets/img/HP.png";
import imag3 from "../assets/img/Lenovo.png";
import imag4 from "../assets/img/asus.png";
export default {
  data: () => {
    return {
      mostrar: false,
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
};
</script>

<template>
  <div class="cards-columns">
    <div
      class="card" 
      v-for="(producto, i) in productos" :key="i">
      <img :src="producto.imagen" class="card-img-top" :alt="producto.name"/>
      <div class="card-body">
        <h5 class="card-tittle">{{ producto.name }}</h5>
        <p class="card-text">{{producto.price }}</p>
        <div v-if="mostrar">
          <div>
            <p class="card-text">{{ producto.description }}</p>
          </div>
        </div>
        <button
          v-on:click="mostrar=!mostrar"
          class="btn btn-danger" id="boton">
          Ver más
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@import '../Estilo.css';
</style>
