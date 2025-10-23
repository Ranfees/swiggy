<template>
  
  <div class="container text-center d-flex flex-column align-items-center justify-content-center parent-div">

    <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"alt="Empty Cart"class="cart-image"/>

    <h4 class="cart-title">Your cart is empty</h4>
    <p class="cart-text">You can go to home page to view more restaurants</p>

    <button class="btn btn-orange mt-2" @click="goHome"> SEE RESTAURANTS NEAR YOU</button>

    <transition name="fade">
      <div v-if="showToast" class="error-toast">
        <i class="bi bi-exclamation-circle-fill"></i>
        <span>Oops! Something wrong</span>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showToast = ref(true);

setTimeout(() => {
  showToast.value = false;
}, 3000);

const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
body {
  background-color: #fff;
}
.parent-div{
    width: 100%;
    height: 80vh;
}

.cart-image {
  width: 280px;
  max-width: 70%;
  margin-bottom: 30px;
}

.cart-title {
  font-weight: 700;
  color: #333;
  font-size: 1.5rem;
}

.cart-text {
  color: #666;
  margin-bottom: 25px;
}

.btn-orange {
  background-color: #fc8019;
  color: white;
  font-weight: 700;
  padding: 10px 25px;
  border-radius: 5px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: 0.2s ease;
}

.btn-orange:hover {
  background-color: #e56d10;
}

.error-toast {
  background-color: #1c1c1c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 8px;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.error-toast i {
  margin-right: 10px;
  color: red;
  font-size: 18px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .cart-title {
    font-size: 1.3rem;
  }
  .cart-text {
    font-size: 0.95rem;
  }
  .btn-orange {
    font-size: 0.9rem;
    padding: 8px 20px;
  }
  .cart-image {
    width: 220px;
  }
}
</style>
