<template>

<div class=" container d-flex align-items-center  p-2 bg-white" style="width: 280px;">
   
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <button @click="getColor" class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Colors
        </button>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal  small">
            <li v-for="color in colors" :key="color.id">
              <router-link :to="{path:'/cars',query:{name:'colorId',id:color._id}}" >
              <a href="#" class="link-dark d-inline-flex text-decoration-none rounded" >{{color.color}}</a></router-link></li>
            </ul>
        </div>
      </li>
      <li class="mb-1">
        <button @click="getModel"  class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Model
        </button>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal  small">
            <li v-for="model in models" :key="model.id">
              <router-link :to="{path:'/cars',query:{name:'modelId',id:model._id}}" >
              <a href="#" class="link-dark d-inline-flex text-decoration-none rounded">{{model.model}}</a></router-link></li>
           </ul>
        </div>
      </li>
      <li class="mb-1">
        <button  @click="getYear" class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Year
        </button>
        <div class="collapse" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal  small">
            <li v-for="year in years" :key="year.id"  >
              <router-link :to="{path:'/cars',query:{name:'yearId',id:year._id}}" >
              <a href="#" class="link-dark d-inline-flex text-decoration-none rounded">{{year.year}}</a></router-link>
              </li>
           </ul>
        </div>
      </li>
     
      <li class="mb-1">
        <button @click="getKm" class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Km
        </button>
        <div class="collapse" id="account-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal small">
            <li v-for="km in kms" :key="km.id">
              <router-link :to="{path:'/cars',query:{name:'kmId',id:km._id}}" >
              <a href="#" class="link-dark d-inline-flex text-decoration-none rounded">{{km.km}}</a></router-link></li>
           </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
 
  data(){
    return{
       colors:null,
       years:null,
       models:null,
       kms:null
    }
  },
   methods: {
    async getColor() {
      await this.$appAxios
        .get("/color")
        .then((res) => {
          console.log(res);
          this.colors=res?.data||null
         },)},
        async getModel() {
      await this.$appAxios
        .get("/model")
        .then((res) => {
          console.log(res);
          this.models=res?.data||null
         },)},
          async getYear() {
      await this.$appAxios
        .get("/year")
        .then((res) => {
          console.log(res);
          this.years=res?.data||null
         },)},
          async getKm() {
      await this.$appAxios
        .get("/km")
        .then((res) => {
          console.log(res);
          this.kms=res?.data||null
         },)}
   }
}
</script>
    
<style lang="css">
 .container .btn-toggle{
  margin: 20px 0;
  font-size: 40px;
 }
 .container .btn-toggle:hover{
  background-color: midnightblue;
  color:white;
  transform: scale(1.2);
 }
.collapse ul li{
  margin-left: 30px;
}
.container .collapse ul li a{
  font-size: 30px;
}
.container .collapse ul li a:hover{
  background-color: midnightblue;
  color:white;
  transform: scale(1.2);
}
</style>