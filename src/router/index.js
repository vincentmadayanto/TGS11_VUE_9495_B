import Vue from 'vue' 
import Router from 'vue-router' 

const LandingLayout = () => import('../components/dashboardLayout.vue')
const DashboardLayout = () => import('../components/dashboardLayout.vue') 

function loadLanding(view) { 
    return () => import(`../components/landingContents/${view}.vue`) 
} 

function loadView(view) { 
    return () => import(`../components/dashboardContents/${view}.vue`) 
} 
 
const routes = [     
    {
        path: '/',
        component: LandingLayout,
        children: [
            {
                name: 'LandingPage',
                path: '',
                component: loadLanding('landingPage')
            }
        ]
    },
    {       
        path: '/dashboard',      
        component: DashboardLayout,       
        children: [         
            {           
                name: 'UserController',           
                path: '/userController',           
                component: loadView('userController')         
            },   
            {
                name: 'VehicleController',
                path: '/vehicleController',
                component: loadView('vehicleController')
            },    
            {
                name: 'login_tgs',
                path: '/login_tgs',
                component: loadView('login_tgs')
            }
        ]     
    },   
]   
Vue.use(Router) 
 
  const router = new Router({mode: 'history', routes: routes}) 
 
  export default router 