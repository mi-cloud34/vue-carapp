<template>
  
    
 
 <div v-bind="response" :carList="carList" class="container car ">
 
    <div v-for="car in carList" :key="car._id" class="card">
   <div class="head"> <h1>{{car.carname}}</h1>
   
     <button v-if=role @click="deletedC(car._id)"><i class="bi bi-trash3-fill"></i></button></div>
 
     <router-link :to="{name:'CarDetailPage',params:{carId:car._id}}"><img crossorigin="anonymous" class="resim" :src="car.carimage"   >
  </router-link>
 
  <div class="card-body">
    <p class="card-text">{{car.price}}</p>
     <router-link v-if=role 
        :to="{ name: 'PaymentPage',params:{carId:car._id}}">
      <i class="bi bi-credit-card-2-back-fill"></i>
     </router-link>
            
         
  </div>
</div>
 
 </div>
   
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      carList:{},
      query:this.$route.query,
      img:this.$appAxios
        .get("/cars")
        .then(async (res) => {
         console.log("data",res?.data);
      },),
    
      response:this.$appAxios
        .get("/cars")
        .then(async (res) => {
        console.log("queryyy",this.query.name);
        console.log("queryyy",this.query.id);
      // console.log("iddddd", this.$route.params.id);
           this.carList=await res?.data||null;
           },),
    

      
     
    }
  },
  methods: {
   
    getC() {
      this.$appAxios
        
        .get(`/cars?${this.query.name}=${this.query.id}`)
        .then(async (res) => {
        console.log("queryyy",this.query.name);
        console.log("queryyy",this.query.id);
     
           this.carList=await res?.data||null;
           },);
    }, deletedC(id){
      this.$appAxios
       
        .delete(`/cars/${id}`)
        .then(async (res) => {
console.log("resss",res);
        })
    }
  },
  
  computed: {
    ...mapGetters({
      auth:"_isAuthenticated",
      role:"_isRole",
      tokenn:"_isToken"
    })
  },
  watch: {
    
  '$route': function(to, from){
    console.log('degisti');
    console.log(from);
    this.query = to.query;
    console.log(this.query);
    this.getC();
  }
}
  

  
};
</script>


<style lang="css">
  .car{
  
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:2rem;
  }
  .car> .card{
     border-radius: 3rem;
  }
  .head{
    margin: 1rem 1rem;
  }
  h1{
    text-align: center;
    display: inline;
    margin-top: 10px;
  }
 p{
  font-size: 20px;
  font-weight: bold;
 }
 .card-body{
  display: flex;
  justify-content: space-between;
 }
 .bi-credit-card-2-back-fill{
  font-size: 30px;
  
 }
 .car .head button{
 float:right;
  margin-right: 10px;
 }
 .bi-trash3-fill{
   font-size: 30px;
 
   
   cursor: pointer;
  
 }
 .car .card .resim{
  object-fit: cover;
  border-radius: 1rem;
  margin: .5rem 1rem;
 }
.car .card .resim:hover{
  transform: scale(1.05);
 }
</style>