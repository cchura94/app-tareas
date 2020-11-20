<template>
  
  <h1>{{ titulo }}</h1>
  <h4>Cantidad de actividades: {{ numero }}</h4>
  <input type="text" v-model="numero">
  <button @click="aumentar">+</button>
  <button @click="reducir">-</button>

  <hr>
  {{ nombres }}

  <ol>
    <li v-for="nom in nombres" :key="nom">{{ nom }}</li>
  </ol>
 
</template>

<script>
export default {
  data(){
    return {
      titulo: "ACTIVIDADES",
      numero: 14,
      nombres: ["Juan", "Cristian", "Ana", "Simon"]
    }
  },
  methods:{
    aumentar(){
      this.numero++;
    },
    reducir(){
      this.numero--;
    }
  }
}
</script>

<style>

</style>