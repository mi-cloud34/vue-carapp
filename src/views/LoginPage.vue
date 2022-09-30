<template>
  <!--  <div class="container ">
   <form  class="fg">
    <h1>Giriş Sayfasına Hosgeldiniz</h1>
    <input v-model="userList.email" type="email" placeholder="Emali Girin" class="txt"/>
    <input v-model="userList.password" type="password" placeholder="Şifreyi Girin" class="txt"/>
  
  <button  type="submit" @click="onSubmit" value="create" class="login-btn">Giriş Yap</button>
  
  <router-link :to="{name:'RegisterPage'}"  type="submit" value="create" class="register-btn">Kaydol</router-link>
   </form>
   <div v-if=this.success class="alert alert-primary" role="alert">
  Giriş başarılı 
</div>
  <div v-if=this.errorr class="alert alert-danger" role="alert">
 {{this.err}}
</div>
    </div>
 
 -->
  <div class="container lg mt-5 ">
    <div class="d-flex align-items-center justify-content-center">
     
     
        <div class="card card1 ">
          <div class="d-flex flex-column align-items-center ">
           <div class="logom mt-4">
           
           </div>
            <span class="login  mt-3">Log in</span>
          </div>
          <div class=" d-flex flex-column justify-content-center align-items-center mt-3">
           
            <input v-model="userList.email" class="form-control" placeholder="email@example.com" />
           
            <input v-model="userList.password" type="password" class="form-control" placeholder="Enter Your Password" />
            <button @click="onSubmit"
              class="mt-5 btn btn-dark d-flex justify-content-center align-items-center"
            >
              Login
            </button>
           
            <div class="text2 mt-2 d-flex flex-row align-items-center">
             <router-link :to="{  name:'RegisterPage' }" class=" btn btn-dark">
                  Register
                </router-link>
            
            </div>
              <div v-if=this.success class="alert alert-primary" role="alert">
  Giriş başarılı 
</div>
  <div v-if=this.errorr class="alert alert-danger" role="alert">
 {{this.err}}
</div>
          </div>
        </div>
      </div>
    </div>
 
</template>
<script>
export default {
  data() {
    return {
      userList: {
        email: null,
        password: null,
      },
      success: false,
      errorr: false,
      err: null,
    };
  },
  methods: {
    async onSubmit() {
      await this.$appAxios
        .post("/user/login", this.userList)
        .then((res) => {
          // console.log("token5555",res?.data.tokens.access_token);
          if (Object.keys(res?.data).length > 0) {
            console.log("Userrrrrr", res?.data); 
            console.log("Tokennnn",res?.data.tokens.access_token);
            this.success = true;
            //localStorage.setItem("accessToken",res.data.tokens.access_token);
            var locate=(res?.data);
            localStorage.setItem("locate", JSON.stringify(locate));
            /* localStorage.setItem("userToken", JSON.stringify(res?.data));
            localStorage.setItem("tokenToken", res?.data.tokens.access_token); */
            //console.log("token5555",res?.data.tokens[0]);
            this.$router.push({ name: "HomePage" });
          } else {
            console.log("err", res.response.message[1]);
          }
        })
        .catch((e) => {
          this.errorr = true;
          this.err = e.response.data["message"];
          console.log(e.response.data["message"]);
        });
    },
  },
};
</script>
<style lang="css">
.container{
 margin: auto;
}
.card1 {
  height: 700px;
  width: 500px;
  border: none;
  border-radius: 1px;
  margin-left: 3px;
  cursor: pointer;
  border: 2px solid black;
  transition: all 0.5s;
}

.card1:hover {
  transform: scale(1.03);
}



.login {
  font-size: 60px;
  font-weight: bold;
 
}

.lg .input-field input{
  font-size: 12px;
  margin-left: 10px;
 border:1px solid midnightblue;
 
}
.lg input{
  text-align: center;
   margin:20px 0;
    height: 50px;
    
}
.lg .form-control {
   width: 400px;
  font-size: 30px;
 
 
  border-bottom: 1px solid #9b9b9b;
  box-shadow: none;
}


.logom{
  text-align: center;
 
  width: 100%;
}
.logom h1{
  font-size: 50px;
  font-weight: bold;
  color:grey
}




.lg button{
 
  font-size: 20px;
  width: 250px;
  height: 50px;
  color:white;
  margin-top: 40px;
  border-radius: 10px;
 
}
.btn-dark{
  width: 250px;
  height: 50px;
}
.btn-dark:hover{
  background-color: white;
  color:black;
  border:2px solid black;
}
</style>
