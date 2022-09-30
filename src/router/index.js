import {createRouter, createWebHashHistory} from 'vue-router';
//import store from '../store/store'
const routes=[
    
    {
        name:"HomePage",
        path:"/",
        component:()=>import('@/views/HomePage'),
        children: [
            {
        name:"CarPage",
        path:'/cars',
        component:{
            content:()=>import('@/components/rare/CarPage')
        }
    }
          ]
    },
    
   /*  {
        name:"CarDetailPage",
        path:"/cars/:carId",
        component:()=>import('@/components/rare/CarDetailPage')
    }, */
    {
    name:"DetayPage",
    path:"/d",
    component:()=>import('@/views/DetayPage'),
    children:[
        {
            name:"CarDetailPage",
            path:"/cars/:carId",
            content:()=>import('@/components/rare/CarDetailPage')
        }
    ]
         
},
    {
        name:"LoginPage",
        path:"/login",
        component:()=>import('@/views/LoginPage')
    },
    {
        name:"RegisterPage",
        path:"/register",
        component:()=>import('@/views/RegisterPage')
    },
    {
        name:"PaymentPage",
        path:"/payment/:carId",
        component:()=>import('@/views/PaymentPage')
    },
    {
        name:"AddCarPage",
        path:"/addcar",
        component:()=>import('@/views/AddCar')
    },
    {
        name:"UserPage",
        path:"/user",
        component:()=>import('@/views/UserPage')
    },
    


]
const router= createRouter({
    routes,
    history:createWebHashHistory()
});
 router.beforeEach((to,from,next)=>{
    const _isAuth=localStorage.getItem('tokenToken')
    //console.log("isauthhh",_isAuth);
    const authRequiredPage=["HomePage","AddCarPage","UserPage"]
    const authPage=["LoginPage","RegisterPage"]
    const authNotRequiredPage=["AddCarPage","UserPage"]
    if (authNotRequiredPage.indexOf(to.name)>-1&&!_isAuth) next(false);
    if (authPage.indexOf(to.name)>-1&&_isAuth) next(false);
   
    if (authRequiredPage.indexOf(to.name)>-1) {
        if (_isAuth) next();
        else next({name:"LoginPage"});
    }
    else{
        next();
    }
    console.log("to",to);
    console.log("from",from);
    
})
export default router;
