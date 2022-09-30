<template>
  
     <div class="container ad mt-5 ">
    <div class="d-flex align-items-center justify-content-center ">
     
     
        <div class="card card5 ">
          <div class="d-flex flex-column align-items-center ">
           <div class="logom mt-3">
            <h1>Aracım.com</h1>
           </div>
            <span class="login  mt-2">Log in</span>
          </div>
          <div class="input-field d-flex flex-column justify-content-center align-items-center mt-3">
            <input  v-model="userList.name" type="text" class="form-control1" placeholder="name" />
             <input v-model="userList.email" type="email" class="form-control1 cl" placeholder="namet@gmail.com" />
            <input v-model="userList.password" type="password" class="form-control1" placeholder="lütfen şifre giriniz" />
           
            
            
           <select v-model="userList.role" name="role" aria-placeholder="rol secin">
            <option value="admin" >admin</option>
            <option value="userr" >userr</option>
           </select>
          
            <input @change="onChange" type="file" placeholder="resim yükeyin">
            <button
              class="mt-1 btn btn-dark d-flex justify-content-center align-items-center"
            >
              Login
            </button>
           
            <div class="text2 mt-1 d-flex flex-row align-items-center">
             <button  @click="onSave" class=" btn btn-dark">
                  Register 
                </button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  
</template>
<script>
//import {ref} from 'vue'
export default {

    data(){
        return{
            userList:{
                name:null,
                email:null,
                password:null,
                role:null,
                image:null
            }
        }
    },
    methods: {
          
   async onSave() {
      console.log(this.userList);
       await this.$appAxios.post("/user/", this.userList).then(response => {
        console.log(response);
        this.$router.push({ name: "HomePage" });
        //this.resetData();
        //this.$router.push("/");
      }); 
    },
    onChange(e){
     const data = new FormData();
      data.append("name", "my-picture");
      const file = e.target.files[0]
      this.userList.image = file
     
    },
  },
};


</script>
<style lang="css">
.ad .card5 {
  height: 700px;
  width: 500px;
  border: none;
  border-radius: 1px;
  cursor: pointer;
  border: 2px solid black;
  transition: all 0.5s;
}

 .ad .card5:hover {
  transform: scale(1.03);
}


.ad  .login {
  font-size: 60px;
  font-weight: bold;
 
}

.ad .input-field input {
  border:1px solid midnightblue;
  font-size: 30px;
  width: 400px;
}

.ad  input{
  height: 50px;
  text-align: center;
  margin: 10px 0;
 
}
.ad  select{
  width: 400px;
  height: 50px;
  text-align: center;
   border:1px solid midnightblue;
}
.ad select option{
  font-size: 40px;
  font-weight: bold;
}
.ad  .form-control1{
   font-size: 40px;
  border-left: none;
  border-right: none;
  border-top: none;
  
  box-shadow: none;
}


.ad  .logom{
  text-align: center;
 
  width: 100%;
}
.ad  .logom h1{
  font-size: 50px;
  font-weight: bold;
  color:grey
}



.ad  button{
  
  font-size: 20px;
  width: 250px;
  height: 50px;
  color:white;

 
}
</style>
