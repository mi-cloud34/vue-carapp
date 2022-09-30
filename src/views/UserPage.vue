<template>
  <div class="container user shadow">
    <img
      src="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg"
      alt=""
    />
    <h2>{{ user.name }}</h2>
    <h4>{{ user.email }}</h4>
    <h5>{{ user.role }}</h5>
    <div v-bind="response" class="user-payment">
      <div v-for="(py, index) in payment" :key="index" class="p-card">
        <img crossorigin="anonymous" :src="py?.carimage" alt="" />
        <div class="info">
          <h5>{{ py?.carname }}</h5>
          <h5>{{ py?.price }}</h5>
        </div>
      </div>
    </div>
    <div class="btn">
      <router-link
        v-if="role"
        router-link
        :to="{ name: 'AddCarPage' }"
        class="b"
        >Arac Ekle</router-link
      >
      <router-link router-link :to="{ name: 'HomePage' }" class="b"
        >Ana Sayfa
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      payment: null,
      response: this.$appAxios.get("/user/paymentlist").then(async (res) => {
        // console.log("Paymentttt5",res.data.map((e)=>e.carId.price));
        this.payment = await res?.data.map((e) => e.carId);
        console.log("p5", this.payment);
       
      }),
    };
  },
  methods: {
    getP() {
      this.$appAxios.get("/users/paymentlist").then(async (res) => {
        console.log("Paymentttt", res?.data);
        // this.payment=res?.data;
      });
    },
  },
  computed: {
    ...mapGetters({
      auth: "_isAuthenticated",
      role: "_isRole",
      user: "_getCurrentUser",
    }),
  },
};
</script>
<style lang="css">
.user::-webkit-scrollbar {
  width: 1.5rem;
  min-height: 5rem;
  background-color: rgb(228, 45, 45);
}
.user::-webkit-scrollbar-track {
  background-color: white;
}
.user::-webkit-scrollbar-thumb {
  border-radius: 3rem;
  background-color: red;
}
.user {
  width: 500px;
  height: 750px;
  border: 2px solid black;
  border-radius: 150px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
.user img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.user img:hover {
  transform: scale(1.3);
}
.user h2 {
  color:black;
}
.user h4 {
  color:black;
}
.user .btn {
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
}
.user .btn .b {
  width: 120px;
  height: 40px;
  margin-top: 10px;
  border: 2px solid black;
  color: black;
  border-color:black;
  transition: 0.3s;
}
.user .btn .b:hover {
  color: white;
  background-color: black;
}
.user .user-payment {
  width: 400px;
  height: 350px;
  background-color: white;
  overflow-y: auto;
}
.user .user-payment .p-card {
  display: flex;
  flex-direction: row;
}

.user .user-payment .p-card img {
  width: 250px;
  height: 100px;
  border-radius: 0;
  object-fit: cover;
}
.user .user-payment .p-card .info {
  margin: 20px 20px;
}
</style>
