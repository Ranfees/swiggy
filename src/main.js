import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import home from './components/home.vue'
import searchbar from './components/searchbar.vue'
import signIn from './components/sign-in.vue'
import pothichor from './components/pothichor.vue'
import biriyani from './components/biriyani.vue'
import shake from './components/shake.vue'
import Shawarma from './components/shawarma.vue'
import dosa from './components/dosa.vue'
import vada from './components/vada.vue'
import rolls from './components/rolls.vue'
import chinese from './components/chinese.vue'
import pasta from './components/pasta.vue'
import pizza from './components/pizza.vue'
import noodles from './components/noodles.vue'
import pizzaHut from './components/top-resto-components/pizza-hut.vue'
import icecreamcorner from './components/top-resto-components/thomson.vue'
import Thomson from './components/top-resto-components/thomson.vue'
import maple from './components/top-resto-components/maple.vue'
import pathans from './components/top-resto-components/pathans.vue'
import dominos from './components/top-resto-components/dominos.vue'
import soofi from './components/top-resto-components/soofi.vue'
import Dominos from './components/top-resto-components/dominos.vue'
import Soofi from './components/top-resto-components/soofi.vue'
import ArabianGrill from './components/top-resto-components/arabian-grill.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/', 
        component: home
    },
     {
        path: '/search', 
        component: searchbar
    },
    {
        path: '/vada', 
        component: vada 
    },{
        path: '/pizza', 
        component: pizza 
    },{
        path: '/rolls', 
        component: rolls 
    },{
        path: '/chinese', 
        component: chinese 
    },{
        path: '/pasta', 
        component: pasta
    },
    {
        path: '/noodles', 
        component: noodles
    },
    { 
        path: '/pothichor',
        component: pothichor
    },
     { 
        path: '/biryani',
        component: biriyani
    },
    { 
        path: '/shake',
        component: shake
    },
       { 
        path: '/shawarma',
        component: Shawarma
    },
       { 
        path: '/dosa',
        component: dosa
    },
    {
        path:'/signin',
        component:signIn
    }, 
    {
        path: '/pizzahut', 
        component: pizzaHut
    },
    {
        path: '/thomsoncasa', 
        component: Thomson
    },
    {
        path: '/maplebake', 
        component: maple
    },
     {
        path: '/pathans', 
        component: pathans
    },
    {
        path: '/dominos', 
        component: Dominos
    },
     {
        path: '/soofi', 
        component: Soofi
    },
     {
        path: '/arabiangrill', 
        component: ArabianGrill
    },
   
   
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')