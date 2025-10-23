<template>
  <div class=" container-fluid border-bottom nav-container sticky-top">
    <nav class="navbar navbar-expand-md navbar-light bg-white">
      <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="../../img/make me this logo in.png" alt="Swiggy Logo" width="40" class="mr-2"/>
        <div class="d-flex align-items-center font-weight-bold text-dark other" style="cursor: pointer" @click="openLocation">
          <span>Other</span>
          <span class="ml-1 small text-muted">▼</span>
        </div>
      </a>
      
      <button class="navbar-toggler" type="button" @click="toggleMenu" aria-controls="navbarNav" :aria-expanded="isOpen" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end":class="{ show: isOpen }"id="navbarNav">
        <ul class="navbar-nav text-md-right text-center">
          <li class="nav-item mx-md-3 my-2 my-md-0 d-flex align-items-center justify-content-md-end justify-content-center">
            <i class="material-icons mr-1">business_center</i>
            <span><a href="/swiggycorporate" style="color: black">Swiggy Corporate</a></span>
          </li>

          <li class="nav-item mx-md-3 my-2 my-md-0 d-flex align-items-center justify-content-md-end justify-content-center" >
            <i class="material-icons mr-1">search</i>
            <span><a href="/search" style="color: black">Search</a></span>
          </li>

          <li class="nav-item mx-md-3 my-2 my-md-0 d-flex align-items-center justify-content-md-end justify-content-center">
            <i class="material-icons mr-1">local_offer</i>
            <span><a href="/offers" style="color: black" >Offers <span class="badge badge-warning ml-1">NEW</span></a></span>
          </li>

          <li class="nav-item mx-md-3 my-2 my-md-0 d-flex align-items-center justify-content-md-end justify-content-center">
            <i class="material-icons mr-1">help_outline</i>
            <span><a href="/help" style="color: black">Help</a></span>
          </li>

          <li class="nav-item mx-md-3 my-2 my-md-0 d-flex align-items-center justify-content-md-end justify-content-center"@click="openLogin">
            <i class="material-icons mr-1">person_outline</i>
            <span style="color: black">Sign In</span>
          </li>

          <li class="nav-item mx-md-3 my-2 my-md-0 d-flex align-items-center justify-content-md-end justify-content-center position-relative">
            <i class="material-icons mr-1">shopping_cart</i>
            <span><a href="/cart" style="color: black">Cart</a></span>
            <span class="badge badge-dark position-absolute" style="top: 0; right: -10px">0</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const openLogin = () => {
  window.dispatchEvent(new Event("open-login"));
};

const openLocation = () => {
  window.dispatchEvent(new Event("open-location"));
};

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>

@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.navbar-nav .nav-item {
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  /* transition: color 0.3s ease; */
}

.navbar-nav .nav-item a:hover,
.navbar-nav .nav-item:hover span,
.navbar-nav .nav-item:hover i {
  color: #ff6600 !important;
}

.other:hover{
  color: #ff6600 !important;
}

@media (max-width: 767.98px) {
  .navbar-collapse {
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
  }

  .navbar-nav {
    flex-direction: column !important;
    align-items: flex-end !important;
  }
}

</style>
