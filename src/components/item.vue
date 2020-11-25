<template>

    
        <div class="col mb-4">
            <div class="card">
            <img src="../assets/logo.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ datos.title }}</h5>
                <p class="card-text">{{ datos.completed }}</p>
            </div>
            </div>
        </div>
    
  
</template>

<script>
export default {
    props: {
        datos: {
            title: String,
            completed: String
        }
    }

}
</script>
