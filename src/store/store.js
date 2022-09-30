import { createStore } from "vuex";

  const store= createStore({
  state: {
    user:JSON.parse(localStorage.getItem("locate")) || null
  },
  mutations: {
   /*  setToken(state, token) {
      console.log("Tokennnnnn11:>> ", token);
      state.token = token;
    }, */
   /*  setRole(state, role) {
      console.log("user :>> ", role);
      state.role = role;
    }, */
    logoutUser(state) {
      //console.log("us5",state.user.Object.keys(tokens.access_token));
        state.user=null;
       // this.$router.push({ name: "LoginPage" });
      },
},
    getters: {
      
        _isAuthenticated: state => state.user!== null,
        _isToken(state) {
             return  state.user.tokens.access_token
        },
        _isRole(state){
           return state.user?.role=='admin'?true:false
        },
        _getCurrentUser(state) {
          const user = state.user;
          delete user?.password;
          return user;
        },
        _currentUserId: state => state?.user?.id,
    },
  
})
export default store;