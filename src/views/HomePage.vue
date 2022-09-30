<template>
  <div class="container">
    
      <navbar-page/>
     <slide-page/>
     
    <div class="row mt-1" >
   <div class="col-3"><category/></div>
   <div class="col-9"><car/></div>
  </div>

   <footer-page/>

  </div>

</template>
<script>
import category from '@/components/common/CategoryPage.vue'
import car from '@/components/rare/CarPage.vue'
export default {
  components:{
   category,
   car
  }
}
</script>