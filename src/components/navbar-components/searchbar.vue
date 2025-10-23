<template>
  <div class="container mt-5">
    <!-- 🔍 Search Box -->
    <div class="input-group">
      <input
        v-model="searchQuery"
        @focus="hideCuisines = true"
        @blur="onSearchBlur"
        @input="handleInput"
        @keyup.enter="searchDishes"
        type="text"
        class="form-control search-input"
        placeholder="Search for restaurants or dishes..."
      />
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="material-icons">search</i>
        </span>
      </div>
    </div>

    <!-- 🍴 Popular cuisines (hidden when typing or searching) -->
    <div class="cont my-4" v-show="!hideCuisines && !searchQuery">
      <div class="food-scroll-wrapper">
        <h6 class="scroll-title">Popular Cuisines</h6>
        <div class="food-container" ref="foodDiv">
          <div class="food-space" v-for="(item, index) in foodImages" :key="index">
            <router-link :to="item.link" class="food-link">
              <img class="img" :src="item.src" :alt="item.name" />
              <p class="food-name">{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 🍛 Dish List -->
  <div class="container mt-4" v-if="dishes.length > 0 && searchQuery">
    <h5 class="mb-3">Showing results for "{{ searchQuery }}"</h5>
    <div class="list-group shadow-sm">
      <div
        v-for="(item, index) in dishes"
        :key="index"
        class="list-group-item list-group-item-action d-flex align-items-center"
      >
        <img
          :src="getImageUrl(item)"
          alt="Dish"
          class="dish-img rounded me-3"
        />
        <div>
          <h6 class="mb-1 fw-bold">{{ item.text }}</h6>
          <small class="text-muted">{{ item.tagToDisplay || "Dish" }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");
const dishes = ref([]);
const hideCuisines = ref(false);

const foodImages = [
  { src: "./img/pothichor.avif", link: "/pothichor" },
  { src: "./img/biriyani.avif", link: "/biryani" },
  { src: "./img/dosa.avif", link: "/dosa" },
  { src: "./img/shwarama.avif", link: "/shawarma" },
  { src: "./img/shake.avif", link: "/shake" },
  { src: "./img/juice.avif", link: "/juice" },
  { src: "./img/rolls.avif", link: "/rolls" },
  { src: "./img/noodles.avif", link: "/noodles" },
  { src: "./img/pasta.avif", link: "/pasta" },
  { src: "./img/tea.avif", link: "/tea" },
  { src: "./img/samooosa.avif", link: "/samoosa" },
  { src: "./img/vada.avif", link: "/vada" },
];

// 🖼️ Extract Cloudinary image
function getImageUrl(item) {
  let cloudinaryId = item.cloudinaryId;
  if (!cloudinaryId && item.metadata) {
    try {
      const meta = JSON.parse(item.metadata);
      cloudinaryId = meta?.data?.cloudinaryId;
    } catch (e) {
      console.warn("Error parsing metadata:", e);
    }
  }

  return cloudinaryId
    ? `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${cloudinaryId}`
    : "https://via.placeholder.com/100";
}

// 🔍 Fetch results
async function searchDishes() {
  if (!searchQuery.value.trim()) {
    dishes.value = [];
    return;
  }

  try {
    const req = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=10.51600&lng=76.21570&str=${searchQuery.value}&trackingId=null&includeIMItem=true`
    );
    const res = await req.json();
    dishes.value = res.data?.suggestions || [];
  } catch (error) {
    console.error("Error fetching dishes:", error);
  }
}

// 👀 Hide cuisines while typing
function handleInput() {
  hideCuisines.value = !!searchQuery.value.trim();
  if (!searchQuery.value.trim()) {
    dishes.value = [];
  }
}

// 🧭 Restore cuisines when user clears or blurs
function onSearchBlur() {
  setTimeout(() => {
    if (!searchQuery.value.trim()) {
      hideCuisines.value = false;
      dishes.value = [];
    }
  }, 200);
}
</script>

<style>
/* === General Layout === */
.container {
  max-width: 100%;
  padding: 0 1rem;
}

/* === Search Bar === */
.search-input {
  border-radius: 10px 0 0 10px;
  font-size: 1rem;
  padding: 10px 15px;
}

/* === Scrollable Food Section === */
.cont {
  margin: 0 auto;
  max-width: 1200px;
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
  padding: 10px;
  scrollbar-width: none;
  scroll-behavior: smooth;
}
.food-container::-webkit-scrollbar {
  display: none;
}
.food-space {
  flex: 0 0 auto;
  width: 10%;
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

/* === Dish List === */
.dish-img {
  width: 70px;
  height: 70px;
  object-fit: cover;
}
.list-group-item {
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #f8fafd;
  transition: background 0.3s ease;
}
.list-group-item:hover {
  background-color: #eef3fb;
}

/* === Responsive Design === */
@media (max-width: 768px) {
  .food-space {
    width: 33.33%;
  }
  .dish-img {
    width: 60px;
    height: 60px;
  }
  .container {
    padding: 0 0.5rem;
  }
}
@media (max-width: 480px) {
  .food-space {
    width: 50%;
  }
  .dish-img {
    width: 50px;
    height: 50px;
  }
  .search-input {
    font-size: 0.9rem;
  }
}
</style>
