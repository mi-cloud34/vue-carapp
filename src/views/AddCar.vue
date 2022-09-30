<template>
  <div class="container rg mt-1 ">
    <div class="d-flex align-items-center justify-content-center ">
     
     
        <div class="card card5 ">
          <div class="d-flex flex-column align-items-center ">
           <div class="logom">
            <h1>Aracım.com</h1>
           </div>
            <h3 class="login  mt-1">Add Car</h3>
          </div>
          <div class="input-field d-flex flex-column justify-content-center align-items-center mt-3">
            <input  v-model="carList.carname" type="text" class="form-control1" placeholder="car name" />
           <select @click="modelChange($event)"  name="modeli" aria-placeholder="model secin">
            <option value="">Select Model</option>
            <option  v-for="(model,index) in models" v-bind:key="model+index" :value="model._id"  >{{model.model}}</option>
           </select>
             <select  @click="yearChange($event)" name="yıl" aria-placeholder="yıl secin">
            <option value="">Select Year</option>
            <option  v-for="(year,index) in years" v-bind:key="year+index" :value="year._id"  >{{year.year}}</option>
           </select>
           <select  @click="colorChange($event)"  name="renk" aria-placeholder="renk secin">
            <option value="">Select Color</option>
            <option  v-for="(color,index) in colors" v-bind:key="color+index" :value="color._id"  >{{color.color}}</option>
           </select>
           
            <select  @click="kmChange($event)"  name="kilometre" aria-placeholder="km secin">
            <option value="">Select Km</option>
            <option  v-for="(km,index) in kms" v-bind:key="km+index" :value="km._id"  >{{km.km}}</option>
           </select>
          
           <input  v-model="carList.price" type="text" class="form-control1 " placeholder="price" />
            <input  v-model="carList.lt" type="text" class="form-control1" placeholder="Latitude" />
            <input  v-model="carList.lg" type="text" class="form-control1" placeholder="Longitude" />
           
            <input @change="onChange" type="file" placeholder="resim yükeyin">
            <button  @click="onSave"
              class="mt-3 btn btn-dark d-flex justify-content-center align-items-center"
            >
              Add Car
            </button>
           
           
          </div>
        </div>
      </div>
    </div>
  
</template>
<script>
export default {
   data(){
    return{
       colors:null,
       years:null,
       models:null,
       kms:null,
       carList:{
        carname:null,
        modelId:null,
        yearId:null,
        colorId:null,
        kmId:null,
        price:null,
        lt:null,
        lg:null,
        carimage:null,
        userId:this.$store.state.user._id,
       
       }
    }
  },
   mounted() {
       this.$appAxios
        .get("/color")
        .then((res) => {
          console.log(res?.data[0].color);
        /*   for (let index = 0; index <Object.keys(res?.data).length; index++) {
           
             this.colors=res?.data[index]||null
          } */
          this.colors=res?.data||null
         },)
       
       this.$appAxios
        .get("/model")
        .then((res) => {
          console.log(res);
          this.models=res?.data||null
         },)
         
       this.$appAxios
        .get("/year")
        .then((res) => {
          console.log(res);
          this.years=res?.data||null
         },)
        
       this.$appAxios
        .get("/km")
        .then((res) => {
          console.log(res);
          this.kms=res?.data||null
         },)
   },
     methods: {
  modelChange(e){
    this.carList.modelId=e.target.value;
    console.log("modelId", this.carList.modelId);
  },
  yearChange(e){
    this.carList.yearId=e.target.value;
    console.log("yearId", this.carList.yearId);
  },
  colorChange(e){
    this.carList.colorId=e.target.value;
    console.log("colorId", this.carList.colorId);
  },
  kmChange(e){
    this.carList.kmId=e.target.value;
    console.log("kmId", this.carList.kmId);
  },
   async onSave() {
      console.log(this.carList);
       await this.$appAxios.post("/cars/", this.carList).then(response => {
      console.log(response);   
         //console.log("target",e.target.options[e.target.options.selectedIndex])
        this.$router.push({ name: "HomePage" });
        //this.resetData();
        //this.$router.push("/");
      }); 
    },
    onChange(e){
     const data = new FormData();
      data.append("name", "my-picture");
      const file = e.target.files[0]
      this.carList.carimage = file
     
    },}
}
</script>
<style lang="css">
.rg .card5 {
  height: 800px;
  width: 500px;
  border: none;
  border-radius: 1px;
  cursor: pointer;
  border: 2px solid black;
  transition: all 0.5s;
}

 .rg .card5:hover {
  transform: scale(1);
}


.rg  .login {
  font-size: 40px;
  font-weight: bold;
 
}

.rg .input-field input {
  
  font-size: 30px;
  width: 400px;
  border:1px solid midnightblue;
  
}

.rg  input{
  height: 40px;
  text-align: center;
  margin: 10px 0;
 
}
.rg  select{
  width: 400px;
  height: 40px;
  text-align: center;
  margin: 10px 0;
   border:1px solid midnightblue;
}
.rg  .form-control1{
   font-size: 40px;
  border-left: none;
  border-right: none;
  border-top: none;
  
  box-shadow: none;
}


.rg  .logom{
  text-align: center;
 
  width: 100%;
}
.rg  .logom h1{
  font-size: 70px;
  font-weight: bold;
  color:midnightblue
}



.rg  button{
  
  font-size: 20px;
  width: 250px;
  height: 50px;
  color:white;
  margin-top: 50px;
 
}
</style>
