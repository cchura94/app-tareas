<template>
    <h1>Lista de Productos</h1>

    <div class="row row-cols-1 row-cols-md-3">

        <itemProducto v-for="(prod, index) in lista_productos" :key="index" :datos="prod"></itemProducto>
    
        <persona nombre="Cristian" ci="34534535"></persona>
    </div>
</template>

<script>
// importando un componente
import itemProducto from "@/components/item"

import axios from 'axios'

export default {
    components: {
        itemProducto
    },
    data(){
        return {
            lista_productos: [],
            producto: {
                titulo: "Mi Titulo",
                detalle: "mi descripcion"
            }
        }
    },
    created(){
        console.log("Este es el created");
        this.lista_productos.push(this.producto);
    },
    mounted(){
        console.log("Este es el mounted");
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            console.log(response.data)
            this.lista_productos = response.data
        })
    },
    methods:{

    }

}
</script>

<style>

</style>