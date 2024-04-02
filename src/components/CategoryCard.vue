<template>
   <router-link :to="router">
     <div class="card w-[200px] h-[200px] bg-[#7556F7] rounded-[25px]">
        <h1 class="text-[white] p-[25px] font-bold text-[20px]">{{title}}</h1>
        <img class="pl-[95px]" :src="img" alt="">
    </div>
   </router-link>
</template>

<script>

 export default {
   
    props:['title', 'img', 'router']        
    }
</script>

<style lang="scss" scoped>
@media (max-width: 435px) { 
    .card {
        width: 150px;
        height: 150px;
    }
    h1{
        font-size: 15px;
    }
    img{
        padding-left: 55px;
    }
 }
</style>