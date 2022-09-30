<template>
 <nav class="navbar navbar-expand-lg bg-light ">
  <div class="container-fluid d-flex justify-content-around">
    <a class="navbar-brand" href="#" >Aracım.com</a>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link "  href="#">Car</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CarDetay</a>
        </li>
       <li v-if=auth&&role class="nav-item">
          <a class="nav-link "  href="#">AddCar</a>
        </li>
        
        <li v-if="auth" class="nav-item">
          <a class="nav-link" href="#">Profil</a>
        </li>
      </ul>
      <form class="d-flex  align-items-center" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
      <router-link v-if="!auth" :to="{name:'LoginPage'}">
     <i class="fa-solid fa-user-large"></i>
      </router-link>
       <button  @click="onLogout" v-if="auth">
    <i class="bi bi-box-arrow-right"></i>
      </button>
    </div>
  </div>
</nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      carList:null,}},
  computed: {
    ...mapGetters({
      auth:"_isAuthenticated",
      role:"_isRole"
    })
  },
   methods: {
    onLogout() {
      //console.log("role");
      this.$store.commit("logoutUser");
     
    },
    getCar(){
      this.$appAxios
        .get("/cars")
        .then((res) => {
        
          console.log("carListtttt",res?.data);
          this.carList=  Object.keys(res?.data||null);
          
         },)
    }
  }
};
</script>
<style lang="css">
   nav .navbar-brand {
    font-size: 40px;
    font-weight: bold;
  }
  .form-control{
    background-color: white;
  }
 .navbar-nav{
    margin:0 7rem
  }
  .btn{
    height: 50px;
  }
  i{
    border:none
  }
  form .form-control{
    height: 50px;
    border-radius: 10px;
    border-color: lightblue;
  }
button {
   margin:0 5px
  }
</style>
