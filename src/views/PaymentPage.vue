<template>
  
    
        <div class="cardd mt-5 px-4">
            <p class="display-5 text-justify fw-bold py-3">Payment Details</p>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Person Name</p>
                        <input v-model="payList.personname" class="form-control mb-3" type="text" placeholder="Name">
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                        <input  v-model="payList.cardnumber" class="form-control mb-3" type="text" placeholder="1234 5678 435678">
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Expiry</p>
                        <input  v-model="payList.expiry" class="form-control mb-3" type="text" placeholder="MM/YYYY">
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">CVV/CVC</p>
                        <input  v-model="payList.cvv" class="form-control mb-3 pt-2 " type="text" placeholder="***">
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-6 ">
                            <router-link :to="{name:'DetayPage'}" >
                                <div class="btn btn-primary mb-3">
                                    <span class="fas fa-arrow-left"></span>
                                    <span class="ps-3">Return</span>
                                   
                                </div>  
                            </router-link>
                        </div>
                        <div  @click="addPay"  class="col-6">
                         
                             <div class="btn btn-primary mb-3">
                                <span class="ps-3">Pay $243</span>
                                <span class="fas fa-arrow-right"></span>
                            </div>
                           </div>
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
            param:this.$route.params,
           
            payList:{
                personname:null,
                cardnumber:null,
                expiry: null,
                cvv:null,
                userId:null,
                carId:null
            },
        }
       
    },
     computed: {
    ...mapGetters({userr:"_getCurrentUser"})
  },
  created() {
   var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
this.payList.expiry=today;
this.payList.personname=this.userr.name
this.payList.userId=this.userr._id
this.payList.carId=this.$route.params.carId
  },
     methods: {
            addPay(){
                 this.$appAxios.post("/payment/" + this.$route.params.carId,this.payList)
        .then(async (res) => {
       
      // console.log("iddddd", this.$route.params.id);
           this.carList=await res?.data||null;
            this.$router.push({ name: "UserPage" });
    })
            }
        },
}
</script>
<style lang="css">
    .cardd{
        height: 100%;
        width:100%
    }
    .cardd button{
        border:none;
        max-width: 300px;
    }
</style>