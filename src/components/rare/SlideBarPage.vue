<template>
 
  <div v-bind="response" class="container crs my-5 ">
     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div  v-for="(cls,index) in carouselList" :key="cls._id"  class="carousel-item " :class="{active:index == 0}">
      <img crossorigin="anonymous" :src="cls.crlimg" class="d-block w-100" height="500" alt="...">
    </div> 
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
 
</template>
<script>
export default {
  data(){
    return{
      carouselList:{},
      isActive:false,
      response:this.$appAxios
        .get("/carousel")
        .then(async (res) => {
         
         
           this.carouselList=await res?.data||null;
          
         },),
        
    }
  },
};
</script>

<style lang="css">
   .crs{
    height: 500px;
    width: 1000px;
   }
</style>