import axios from "axios";
 export const appAxios = axios.create({
  baseURL: "http://localhost:3000",
   headers: {
    Authorization: 'Bearer ' + localStorage.getItem('tokenToken'),
    "Content-Type": "multipart/form-data",
    //'Access-Control-Allow-Origin' : '*',
   }
   /*  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', */
  
});
/* const appAxios = axios.create({
  baseURL:"http://localhost:3000",
})

appAxios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('tokenToken')
      if (token) {
         config.headers.Authorization = `Bearer ${token}`
         config.headers["Content-Type"] = "multipart/form-data"
      } else {
         // Do something... Usually logout user.
      }
      return config
    }
)

export default appAxios */