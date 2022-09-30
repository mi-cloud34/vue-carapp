<template>
 <div class="container">
    
      <navbar-page/>
      <slide-page/>

    <div class="row" >
   <div class="col-10"><cardetail /></div>
  </div>

   <footer-page/>

  </div>
</template>

<script>
import cardetail from '@/components/rare/CarDetailPage.vue'
  import { mapGetters } from "vuex";
export default {
   components:{
  
   cardetail
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
