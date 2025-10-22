<template>
  <div class="container mt-4">
    <div class="list-group shadow-sm">
      <div
        v-for="(item, index) in dishes"
        :key="index"
        class="list-group-item list-group-item-action d-flex align-items-center"
      >
        <img
          :src="getImageUrl(item.cloudinaryId)"
          alt="Dish"
          class="dish-img rounded mr-3"
        />
        <div>
          <h6 class="mb-1 font-weight-bold">{{ item.text }}</h6>
          <small class="text-muted">{{ item.type || 'Dish' }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const dishes = ref([]);

function getImageUrl(cloudinaryId) {
  return cloudinaryId
    ? `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${cloudinaryId}`
    : "https://via.placeholder.com/100"; // fallback image
}

onMounted(async () => {
  try {
    const req = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=10.51600&lng=76.21570&str=biriyani&trackingId=null&includeIMItem=true"
    );
    const res = await req.json();

    // API returns suggestions array
    dishes.value = res.data.suggestions || [];
  } catch (error) {
    console.error("Error fetching dishes:", error);
  }
});
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css";

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
</style>
