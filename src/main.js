import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import home from './components/home.vue'
import searchbar from './components/navbar-components/searchbar.vue'
import pothichor from './components/whats-on-ur-mind-compo/pothichor.vue'
import biriyani from './components/whats-on-ur-mind-compo/biriyani.vue'
import shake from './components/whats-on-ur-mind-compo/shake.vue'
import Shawarma from './components/whats-on-ur-mind-compo/shawarma.vue'
import dosa from './components/whats-on-ur-mind-compo/dosa.vue'
import vada from './components/whats-on-ur-mind-compo/vada.vue'
import rolls from './components/whats-on-ur-mind-compo/rolls.vue'
import chinese from './components/whats-on-ur-mind-compo/chinese.vue'
import pasta from './components/whats-on-ur-mind-compo/pasta.vue'
import pizza from './components/whats-on-ur-mind-compo/pizza.vue'
import noodles from './components/whats-on-ur-mind-compo/noodles.vue'
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
import cart from './components/navbar-components/cart.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/', 
        component: home
    },
  
    {
        path:'/cart',
        component:cart
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