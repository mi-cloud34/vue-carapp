<template>
  <div v-bind="response" class="container car1">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770809.0860158126!2d28.45174621544522!3d41.003964328513874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1663113737802!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> <div class="card">
  <h1>{{carList?.carname}}</h1>
   
  <div class="">
        <div class="detay img-fluid">
               <img crossorigin="anonymous" :src="carList?.carimage" >
    <div class="">
          <div class="info ms-5 fw-bold">
            <h2 class=""></h2><br>
            <h2 class="">{{carList?.modelId.model}}</h2><br>
            <h2 class="">{{carList?.colorId.color}}</h2><br>
            <h2 class="">{{carList?.yearId.year}}</h2><br>
            <h2 class="">{{carList?.price}}</h2><br>
          </div>
        </div>
        </div>
          <div class="sepet">
            <h3 style="color:black">Sepete Ekle</h3>
           <button v-if=role > <i class="bi bi-basket-fill"></i></button>
               
            
          </div>
  </div>
 
</div>
 
 </div>
</template>
<script>

  import { mapGetters } from "vuex";
export default {
  data() {
    return {
      
      carList:null,
     
      response: this.$appAxios.get("/cars/" + this.$route.params.carId)
        .then(async (res) => {
       
     
           this.carList=await res?.data||null;
    })}
  },
  
  computed: {
    ...mapGetters({role:"_isRole"})
  },
   methods: {
    
    onLogout() {
      this.$store.commit("logoutUser");
      this.$router.push({ name: "LoginPage" });
    }
  }
};

</script>
<style lang="css">
  .car1{
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap:1px;
    margin-top: 10px;
  text-align: center;
  }
  .car1 .card{
    margin-left: 10px;
    margin-right: 10px;
    height: 500px;
    width: 550px;
   
  }
  .car1 .card img{
    width: 350px;
    height: 300px;
    object-fit: cover;
  }
  .car1 .card h2{
    font-size: 25px;
    font-weight: bold;
  }
  .car1 .card h1{
    font-size: 60px;
  }
   .car1 .card .detay{
    display: flex;
    flex-direction: row;
   
   }
    .car1 iframe{
      height:500px;
      min-width:800px ;
    }
    .car1 .card  .sepet{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 30px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .bi-basket-fill{
      font-size: 40px;
      border:none;
      margin-bottom: 5px;
    }
</style>
