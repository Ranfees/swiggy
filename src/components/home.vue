<template>

  <!-- whats on your mind template-->
  <div class="cont my-4">
    <div class="food-scroll-wrapper">
      <!-- FIXED TITLE -->
      <h6 class="scroll-title">What’s on your mind</h6>

      <!-- FIXED SCROLL BUTTONS -->
      <div class="scroll-buttons">
        <i class="bi bi-arrow-left-circle" @click="scrollLeft"></i>
        <i class="bi bi-arrow-right-circle" @click="scrollRight"></i>
      </div>

      <!-- SCROLLABLE CONTENT -->
      <div class="food-container" ref="foodDiv">
        <div class="food-space" v-for="(item, index) in foodImages" :key="index">
          <!-- ✅ Clickable router link -->
          <router-link :to="item.link" class="food-link">
            <img class="img" :src="item.src" :alt="item.name" />
            <p class="food-name">{{ item.name }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <hr class="container" style="height: 1px; background-color: ghostwhite;">

  <!-- top resturants in trissur template-->
  <div class="cont my-4">
    <div class="food-scroll-wrapper">
      <!-- Section Heading -->
      <div class="pizza-scroll-title">Top restaurant chains in Thrissur</div>
     <!-- <div class="pizza-scroll-buttons">
        <i class="bi bi-arrow-left-circle" @click="scrollLeft2"></i>
        <i class="bi bi-arrow-right-circle" @click="scrollRight2"></i>
      </div>  -->

      <!-- Scrollable Card Container -->
      <div class="scroll-container" ref="cardScroll">
        <div v-for="(card, index) in cards" :key="index" class="card-item">
          <router-link :to="card.link" class="card-link">
            <img class="img-style" :src="card.image" :alt="card.name" />
            <div class="text">
              <div class="restaurant-name">{{ card.name }}</div>
              <div class="rating-time">
                <span class="material-icons star">star</span>
                {{ card.rating }}
                <span class="dot">•</span>
                {{ card.time }}
              </div>
              <div class="description">{{ card.category }}</div>
              <div class="description">{{ card.location }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <hr style="height: 1px; background-color: ghostwhite" />
  </div>

  <!-- resturants with home delivery template (GRID VERSION) -->
  <div class="cont my-4">
    <div class="delivery-resto-wrapper">
      <!-- Heading -->
      <div class="div-title">
        Restaurants with online food delivery in Thrissur
      </div>

      <!-- ✅ GRID layout restored -->
      <div class="restorant-grid">
        <div v-for="(card, index) in cards2" :key="index" class="grid-card-item">
          <router-link :to="card.link" class="card-link">
            <img class="img-style" :src="card.image" :alt="card.name" />
            <div class="text">
              <div class="restaurant-name">{{ card.name }}</div>
              <div class="rating-time">
                <span class="material-icons star">star</span>
                {{ card.rating }}
                <span class="dot">•</span>
                {{ card.time }}
              </div>
              <div class="description">{{ card.category }}</div>
              <div class="description">{{ card.location }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const foodDiv = ref(null);

const scrollLeft = () => {
  foodDiv.value?.scrollBy({ left: -300, behavior: "smooth" });
};

const scrollRight = () => {
  foodDiv.value?.scrollBy({ left: 300, behavior: "smooth" });
};

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

const cardScroll = ref(null);

const scrollLeft2 = () => {
  cardScroll.value.scrollBy({ left: -300, behavior: "smooth" });
};

const scrollRight2 = () => {
  cardScroll.value.scrollBy({ left: 300, behavior: "smooth" });
};

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
    name: "Thomson,s casa",
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
    name: "Soofi mandi",
    rating: "4.0",
    time: "28–32 mins",
    category: "Indian Curries",
    location: "Poothole",
    image: "./img/soofi2.avif",
    link: "/soofi",
  },
  {
    name: "Arabian grill",
    rating: "3.9",
    time: "35 mins",
    category: "Street Pizza",
    location: "Budget Area",
    image: "./img/arabian-grill.avif",
    link: "/arabiangrill",
  },
];

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

/* ---------------- FOOD SCROLL SECTION ---------------- */
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

/* ---------------- PIZZA SCROLL SECTION ---------------- */
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

/* ---------------- RESTAURANT GRID SECTION ---------------- */
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

/* ---------------- RESPONSIVENESS ---------------- */

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
</style>
