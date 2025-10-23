<template> <!-- whats on your mind template-->
  <div class="cont my-4">
    <div class="food-scroll-wrapper"> <!-- FIXED TITLE -->
      <h6 class="scroll-title">What’s on your mind</h6> <!-- FIXED SCROLL BUTTONS -->
      <div class="scroll-buttons"> <i class="bi bi-arrow-left-circle" @click="scrollLeft"></i> <i
          class="bi bi-arrow-right-circle" @click="scrollRight"></i> </div> <!-- SCROLLABLE CONTENT -->
      <div class="food-container" ref="foodDiv">
        <div class="food-space" v-for="(item, index) in foodImages" :key="index"> <!-- ✅ Clickable router link -->
          <router-link :to="item.link" class="food-link"> <img class="img" :src="item.src" :alt="item.name" />
            <p class="food-name">{{ item.name }}</p>
          </router-link> </div>
      </div>
    </div>
  </div>
  <hr class="container" style="height: 1px; background-color: ghostwhite;"> <!-- top resturants in trissur template-->
  <div class="cont my-4">
    <div class="food-scroll-wrapper">
      <div class="pizza-scroll-title">Top restaurant chains in Thrissur</div>
      <div class="scroll-container" ref="cardScroll">
        <div v-for="(card, index) in cards" :key="index" class="card-item"> <router-link :to="card.link"
            class="card-link"> <img class="img-style" :src="card.image" :alt="card.name" />
            <div class="text">
              <div class="restaurant-name">{{ card.name }}</div>
              <div class="rating-time"> <span class="material-icons star">star</span> {{ card.rating }} <span
                  class="dot">•</span> {{ card.time }} </div>
              <div class="description">{{ card.category }}</div>
              <div class="description">{{ card.location }}</div>
            </div>
          </router-link> </div>
      </div>
    </div>
    <hr style="height: 1px; background-color: ghostwhite" />
  </div> <!-- resturants with home delivery -->
  <div class="cont my-4">
    <div class="delivery-resto-wrapper">
      <div class="div-title">Restaurants with online food delivery in Thrissur</div>
      <div class="restorant-grid">
        <div v-for="(card, index) in cards2" :key="index" class="grid-card-item"> <router-link :to="card.link"
            class="card-link"> <img class="img-style" :src="card.image" :alt="card.name" />
            <div class="text">
              <div class="restaurant-name">{{ card.name }}</div>
              <div class="rating-time"> <span class="material-icons star">star</span> {{ card.rating }} <span
                  class="dot">•</span> {{ card.time }} </div>
              <div class="description">{{ card.category }}</div>
              <div class="description">{{ card.location }}</div>
            </div>
          </router-link> </div>
      </div>
    </div>
  </div>
  <div v-if="showLogin" id="overlay">
    <div class="login-box"> <i class="bi bi-x-lg close-icon" @click="closeLogin"></i>
      <h3>Login</h3> <span>or <a href="#" class="a-tag">create an account</a></span>
      <p>___</p> <input type="number" placeholder="enter your number" class="input-box" />
      <div class="mt-4"> <button class="btn-lg btn text-center login-button">Login</button> </div>
      <div class="policy-text"> <b>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</b> </div>
    </div>
  </div>

  <div> 
    <transition name="overlay-fade">
      <div v-if="showLocation" class="location-overlay" @click.self="closeLocation">
        <transition name="slide-left">
          <div class="sidebar"> <i class="bi bi-x-lg close-btn" @click="closeLocation"></i> <input type="text"
              class="search-input" placeholder="Search for area, street name.." />
            <div class="location-box"> <i class="bi bi-geo-alt location-icon"></i>
              <div class="location-text">
                <h6>Get current location</h6>
                <p>Using GPS</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showLogin = ref(false);
const closeLogin = () => {
  showLogin.value = false;
};
const openLoginHandler = () => {
  showLogin.value = true;
};

onMounted(() => {
  window.addEventListener("open-login", openLoginHandler);
});
onBeforeUnmount(() => {
  window.removeEventListener("open-login", openLoginHandler);
});

// Location Selector Logic
const showLocation = ref(false);

const closeLocation = () => {
  showLocation.value = false;
};

const openLocationHandler = () => {
  showLocation.value = true;
};

onMounted(() => {
  window.addEventListener("open-location", openLocationHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener("open-location", openLocationHandler);
});


const foodDiv = ref(null);
const cardScroll = ref(null);

const scrollLeft = () => 
  foodDiv.value?.scrollBy({ left: -300, behavior: "smooth" });
const scrollRight = () =>
  foodDiv.value?.scrollBy({ left: 300, behavior: "smooth" });

const scrollLeft2 = () =>
  cardScroll.value?.scrollBy({ left: -300, behavior: "smooth" });
const scrollRight2 = () =>
  cardScroll.value?.scrollBy({ left: 300, behavior: "smooth" });

// what’s on your mind section images
const foodImages = [
  { src: "./img/pothichor.avif", link: "/pothichor" },
  { src: "./img/biriyani.avif", link: "/biryani" },
  { src: "./img/dosa.avif", link: "/dosa" },
  { src: "./img/shwarama.avif", link: "/shawarma" },
  { src: "./img/shake.avif", link: "/shake" },
  { src: "./img/rolls.avif", link: "/rolls" },
  { src: "./img/noodles.avif", link: "/noodles" },
  { src: "./img/pasta.avif", link: "/pasta" },
  { src: "./img/tea.avif", link: "/tea" },
  { src: "./img/samooosa.avif", link: "/samoosa" },
  { src: "./img/vada.avif", link: "/vada" },
];

// Top restaurant chains in Thrissur
const cards = [
  {
    name: "Pizza Hut",
    rating: "4.1",
    time: "20–22 mins",
    category: "Pizzas",
    location: "Poothole",
    image: "./img/pizza-hut.avif",
    link: "/pizzahut",
  },
  {
    name: "Thomson’s Casa",
    rating: "4.3",
    time: "30 mins",
    category: "Desserts",
    location: "Icecream Corner",
    image: "./img/thomson.avif",
    link: "/thomsoncasa",
  },
  {
    name: "Maple Bake",
    rating: "4.2",
    time: "25–30 mins",
    category: "Bakery",
    location: "City Center",
    image: "./img/maple-bake.avif",
    link: "/maplebake",
  },
  {
    name: "Pathans Hotel",
    rating: "4.1",
    time: "20–22 mins",
    category: "Pizzas",
    location: "Downtown",
    image: "./img/pizza-hut.avif",
    link: "/pathans",
  },
  {
    name: "Domino's",
    rating: "4.4",
    time: "30 mins",
    category: "Mandi",
    location: "Sultan Area",
    image: "./img/soofi-mandi.avif",
    link: "/dominos",
  },
  {
    name: "Soofi Mandi",
    rating: "4.0",
    time: "28–32 mins",
    category: "Indian Curries",
    location: "Poothole",
    image: "./img/soofi2.avif",
    link: "/soofi",
  },
  {
    name: "Arabian Grill",
    rating: "3.9",
    time: "35 mins",
    category: "Street Pizza",
    location: "Budget Area",
    image: "./img/arabian-grill.avif",
    link: "/arabiangrill",
  },
];

// Second restaurant list
const cards2 = [
  {
    name: "Pizza Hut",
    rating: "4.1",
    time: "20–22 mins",
    category: "Pizzas",
    location: "Poothole",
    image: "./img/resto-img/pizza-hut.avif",
    link: "/pizzahut",
  },
  {
    name: "Burger King",
    rating: "4.3",
    time: "30 mins",
    category: "Desserts",
    location: "Kavanakallu",
    image: "/img/resto-img/burger-king.avif",
    link: "/burgerking",
  },
  {
    name: "Chicasa",
    rating: "4.2",
    time: "25–30 mins",
    category: "Bakery",
    location: "City Center",
    image: "/img/resto-img/chicasa.avif",
    link: "/chicasa",
  },
  {
    name: "Cook Door",
    rating: "4.1",
    time: "20–22 mins",
    category: "Veg/Non-Veg",
    location: "Downtown",
    image: "/img/resto-img/cook-door.avif",
    link: "/cookdoor",
  },
  {
    name: "Akshaya Hotel",
    rating: "4.4",
    time: "30 mins",
    category: "Biriyani, Mandi..",
    location: "Sultan Area",
    image: "/img/resto-img/akshaya.avif",
    link: "/akshayahotel",
  },
  {
    name: "Burger Castle",
    rating: "4.0",
    time: "28–32 mins",
    category: "Burgers",
    location: "Poothole",
    image: "/img/resto-img/burger-castle.avif",
    link: "/burgercastle",
  },
  {
    name: "Dhe Thattu",
    rating: "3.9",
    time: "35 mins",
    category: "Thattukada special",
    location: "Budget Area",
    image: "/img/resto-img/dhe-thattu.avif",
    link: "/dhethattu",
  },
  {
    name: "Hive Honey",
    rating: "3.9",
    time: "35 mins",
    category: "Honey Cake",
    location: "Calicut Area",
    image: "/img/resto-img/hive-honey.avif",
    link: "/hivehoney",
  },
];

</script>

<style scoped>
  .cont {
    margin-left: 140px;
    margin-right: 140px;
  }

  .food-scroll-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    background: #fff;
  }

  .food-container {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px;
    scrollbar-width: none;
    scroll-behavior: smooth;
  }

  .food-container::-webkit-scrollbar {
    display: none;
  }

  .food-space {
    width: 14.2857%;
    flex: 0 0 auto;
    padding: 5px;
    text-align: center;
  }

  .food-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  .food-link:hover .img {
    transform: scale(1.05);
  }

  .food-name {
    font-size: 14px;
    margin-top: 6px;
    color: #333;
    font-weight: 500;
  }

  .scroll-buttons {
    position: absolute;
    top: 5px;
    right: 10px;
    z-index: 100;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    padding: 4px 6px;
  }

  .scroll-buttons i {
    font-size: 1.8rem;
    margin-left: 8px;
    color: green;
    cursor: pointer;
    transition: color 0.2s;
  }

  .scroll-buttons i:hover {
    color: darkgreen;
  }

  .scroll-title {
    position: absolute;
    top: 8px;
    left: 15px;
    z-index: 100;
    background: rgba(255, 255, 255, 0.7);
    padding: 4px 10px;
    border-radius: 10px;
    font-weight: 600;
    color: green;
  }

  .pizza-scroll-buttons {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    padding: 4px 6px;
  }

  .pizza-scroll-title {
    background: rgba(255, 255, 255, 0.7);
    padding: 4px 10px;
    border-radius: 10px;
    font-weight: 600;
    color: green;
  }

  .scroll-container {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 50px 10px 10px;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }

  .scroll-container::-webkit-scrollbar {
    display: none;
  }

  .card-item {
    flex: 0 0 auto;
    width: 280px;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .card-item:hover {
    transform: scale(1.03);
  }

  .card-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .img-style {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 15px;
  }

  .text {
    padding: 10px;
  }

  .restaurant-name {
    font-size: 18px;
    font-weight: bold;
  }

  .rating-time {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #555;
    margin-bottom: 6px;
  }

  .material-icons.star {
    background-color: green;
    color: white;
    border-radius: 50%;
    padding: 2px;
    font-size: 16px;
    margin-right: 6px;
  }

  .dot {
    margin: 0 6px;
    font-weight: bold;
  }

  .description {
    font-size: 13px;
    color: #777;
    margin-bottom: 2px;
  }

  .restorant-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 20px;
    padding-top: 40px;
  }

  .grid-card-item {
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .grid-card-item:hover {
    transform: scale(1.03);
  }

  .div-title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 15px;
  }

 .location-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  z-index: 2000;
}

.login-box {
    width: 400px;
    background-color: white;
    height: 100vh;
    padding: 40px;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .close-icon {
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .input-box {
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    padding-left: 10px;
  }

  .login-button {
    width: 100%;
    background-color: rgb(255, 68, 0);
    color: white;
    font-weight: bold;
  }

  .a-tag {
    color: rgb(255, 68, 0);
  }

  .policy-text {
    width: 100%;
    font-size: 11px;
    margin-top: 10px;
  }

  /* ✅ Large screens (default: desktop) */
  @media (max-width: 1400px) {
    .cont {
      margin-left: 80px;
      margin-right: 80px;
    }
  }

  /* ✅ Medium screens (tablets) */
  @media (max-width: 992px) {
    .cont {
      margin-left: 40px;
      margin-right: 40px;
    }

    .food-space {
      width: 25%;
    }

    .pizza-scroll-buttons {
      right: 100px;
      top: 340px;
    }

    .pizza-scroll-title {
      top: 360px;
      left: 60px;
    }

    .card-item {
      width: 240px;
    }

    .img-style {
      height: 160px;
    }
  }

  /* ✅ Small screens (phones) */
  @media (max-width: 768px) {
    .cont {
      margin-left: 20px;
      margin-right: 20px;
    }

    .scroll-title,
    .pizza-scroll-title {
      position: static;
      background: none;
      padding: 0;
      margin-bottom: 10px;
      font-size: 16px;
      display: block;
      text-align: center;
    }

    .scroll-buttons,
    .pizza-scroll-buttons {
      display: none;
    }

    .food-space {
      width: 16.6%;
      flex: 0 0 auto;
    }

    .img {
      width: 100%;
      border-radius: 8px;
    }

    .scroll-container {
      gap: 12px;
    }

    .card-item {
      width: 210px;
    }

    .restorant-grid {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
  }

  /* ✅ Extra small (very small devices) */
  @media (max-width: 480px) {
    .cont {
      margin-left: 10px;
      margin-right: 10px;
    }

    .scroll-buttons,
    .pizza-scroll-buttons {
      display: none;
    }

    .food-space {
      width: 60%;
    }

    .card-item {
      width: 180px;
    }

    .img-style {
      height: 140px;
    }

    .div-title {
      font-size: 16px;
      text-align: center;
    }

    .restaurant-name {
      font-size: 16px;
    }
  }

  .location-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    z-index: 99999;
  }

  /* ---------- Sidebar ---------- */
  .sidebar {
    width: 40%;
    background-color: #fff;
    height: 100%;
    padding: 30px 40px;
    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.15);
    overflow-y: auto;
  }

  /* ---------- Transitions ---------- */
  .overlay-fade-enter-active,
  .overlay-fade-leave-active {
    transition: opacity 0.4s ease;
  }

  .overlay-fade-enter-from,
  .overlay-fade-leave-to {
    opacity: 0;
  }

  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: transform 0.4s ease;
  }

  .slide-left-enter-from,
  .slide-left-leave-to {
    transform: translateX(-100%);
  }

  /* ---------- Close Button ---------- */
  .close-btn {
    font-size: 22px;
    color: #222;
    cursor: pointer;
    margin-bottom: 25px;
    transition: color 0.3s ease;
  }

  .close-btn:hover {
    color: #ff5a5f;
  }

  /* ---------- Search Input ---------- */
  .search-input {
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 15px;
    outline: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;
  }

  .search-input::placeholder {
    color: #999;
  }

  /* ---------- Location Box ---------- */
  .location-box {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 15px;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }

  .location-box:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }

  .location-icon {
    font-size: 20px;
    margin-right: 15px;
    color: #000;
  }

  .location-text h6 {
    font-weight: 600;
    margin: 0;
    font-size: 16px;
  }

  .location-text p {
    margin: 2px 0 0;
    color: #777;
    font-size: 14px;
  }

  /* ---------- Responsive ---------- */
  @media (max-width: 768px) {
    .sidebar {
      width: 100%;
      padding: 25px;
    }
  }
</style>