<template>
<div class="main-container">
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Thrissur</a></li>
            <li class="breadcrumb-item dark" id="breadcrumb-current" aria-current="page">Loading...</li>
            </ol>
        </nav>

        <h3 id="restaurant-name" class="mb-4"><b>Loading...</b></h3>

    <div class="box pl-3 ">
        <div class="mt-2 d-flex">
            <i class="bi bi-star-fill star"></i>
            <span class="rating" id="rating"><b>...</b></span>
            <span class="">•</span>
            <span id="cost"><b>...</b></span>
        </div>

        <div class="mt-2" style="font-size: 12px;">
            <a href="#" id="cuisine-link" style="text-decoration: underline;" class="text-danger font-weight-bold">...</a>
        </div>

        <div class="mt-2 d-flex flex-wrap align-items-center" style="font-size: 14px;">
            <span class="mx-2">•</span>
            <span class="mr-2"><b>Outlet</b></span>
            <p id="outlet" class="mb-0">...</p>
            <span class="ml-2 text-secondary">▼</span>
        </div>

        <div class="mb-3" style="font-size: 14px;">
            <span class="mx-2">•</span>
            <i class="bi bi-clock"></i> <b>25–30 mins</b>
        </div>
        </div>
    </div>

        <!-- Deals Section -->
        <div class="mt-5 deals-section">
        <h4 class="font-weight-bold mb-3">Deals for you</h4>
        <div class="scroll-btns ml-auto d-flex">
            <div class="scroll-btn"><i class="bi bi-arrow-left"></i></div>
            <div class="scroll-btn"><i class="bi bi-arrow-right"></i></div>
        </div>
        <div class="d-flex align-items-center position-relative">
            <div class="deal-scroll">
            <div class="deal-card">
                <div class="deal-icon">
                <img class="deal-of-day" src="../../../img/deal-of-day.avif" alt="">
                </div>
                <div>
                <b>Items At ₹99</b><br />
                <small class="text-muted">ON SELECT ITEMS |</small>
                </div>
            </div>

            <div class="deal-card">
                <img class="deal-of-day" src="../../../img/generic.avif" alt="">
                <div>
                <b>60% Off Upto ₹110</b><br />
                <small class="text-muted">USE FIRSTMEAL</small>
                </div>
            </div>

            <div class="deal-card">
                <img class="deal-of-day" src="../../../img/flat.avif" alt="">
                <div>
                <b>Flat ₹100 Off</b><br />
                <small class="text-muted">USE PIZZALOVE</small>
                </div>
            </div>

            <div class="deal-card">
                <img class="deal-of-day" src="../../../img/flat.avif" alt="">
                <div>
                <b>Free Garlic Bread</b><br />
                <small class="text-muted">ON ORDERS ABOVE ₹499</small>
                </div>
            </div>
            </div>
        </div>
        </div>

        <!-- Menu Section -->
    <div class="container mt-5">
        <div class="menu-title">MENU</div>

        <div class="search-bar">
        <input type="text" placeholder="Search for dishes" />
        <i class="bi bi-search text-muted"></i>
        </div>

        <div class="filter-buttons d-flex mt-3 flex-wrap">
        <div class="filter-btn">
            <span class="veg-icon" style="border-color: green"></span>
        </div>
        <div class="filter-btn">
            <span class="nonveg-icon" style="border-color: red"></span>
        </div>
        <div class="bestseller-btn">Bestseller</div>
        </div>
    </div>

        <!-- Top Picks -->
    <div class="top-picks-section container mt-5">
        <div class="carousel-header">
        <h5>Top Picks</h5>
        </div>
        <div class="card-carousel" id="carousel">
        <div class="card" >
            <img src="../../../img/dealoftheday/chicken-tikka-pizza.avif" alt="" style="width: 100%; height: 100%" />
        </div>
        <div class="card" >
            <img src="../../../img/dealoftheday/tandoori-pizza.avif" alt="" style="width: 100%; height: 100%" />
        </div>
        <div class="card" >
            <img src="../../../img/dealoftheday/triple-chicken.avif" alt="" style="width: 100%; height: 100%" />
        </div>
        </div>
    </div>

        <!-- Recommended items -->
    <div v-for="n in 7" :key="n" class="container menu-item d-flex justify-content-between align-items-start py-3 border-top flex-wrap">
        <div class="item-info pr-3">
            <div class="veg-icon mb-1"></div>

            <div class="font-weight-bold">Veggie Feast</div>
            <div class="text-success font-weight-bold">
            ₹259 <small class="text-muted">60% OFF USE FIRSTMEAL</small>
            </div>

            <div class="text-success mb-1">
            <i class="bi bi-star-fill"></i> 4.3 <small class="text-muted">(26)</small>
            </div>

            <div class="text-muted small">
            Serves 1 | Herbed onion and green capsicum, juicy sweet corn & mozzarella cheese with flavourful pan sauce
            (PAN Per/Med–269 Kcal/100g | TnC-2...) <a href="#" class="text-dark font-weight-bold">more</a>
            </div>
        </div>

        <div class="text-center mt-3 mt-md-0">
                <img src="../../../img/pizza-hut.avif" alt="Veggie Feast" class="food-img mb-1" />
                <button class="btn btn-sm btn-light border font-weight-bold text-success w-100">ADD</button>
                <div class="text-muted small">Customisable</div>
        </div>
    </div>

        <!-- Footer -->
    <div class="container mt-5 footer-div">
        <div>
            <img class="fssat" src="../../../img/dealoftheday/fssai_final_edss9i.avif" alt="" />
            <span class="pl-4"> License No. 11322008001082</span>
        </div>
        <hr />
        <div class="d-flex flex-column gap-2">
            <span id="footer-name">..</span>
            <span id="footer-outlet">..</span>
            <p id="footer-address" class="mt-2" style="font-size: 10px">.. </p>
        </div>
        <hr />
        <div class="text-center mb-3">
            <span>For better experience, download the Swiggy app now</span>
        </div>
        <div class="d-flex logo-section">
            <img class="img" src="../../../img/dealoftheday/play_store.avif" alt="" />
            <img class="img" src="../../../img/dealoftheday/app_store.avif" alt="" />
        </div>
    </div>

</div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(async () => {
  try {
    const req = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51600&lng=76.21570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await req.json();

    const info = res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[1].info;

    document.getElementById("restaurant-name").innerHTML = `<b>${info.name}</b>`;
    document.getElementById("breadcrumb-current").textContent = info.name;
    document.getElementById("rating").innerHTML = `<b>${info.avgRating} (${info.totalRatingsString})</b>`;
    document.getElementById("cost").innerHTML = `<b>${info.costForTwoMessage || "₹350 for two"}</b>`;
    document.getElementById("outlet").textContent = info.locality || info.areaName || "Unknown Area";

    const cuisine = info.cuisines && info.cuisines.length > 0 ? info.cuisines[0] : "Cuisine";
    document.getElementById("cuisine-link").textContent = cuisine;

    document.getElementById("footer-name").textContent = info.name || "Unknown Restaurant";
    document.getElementById("footer-outlet").textContent = `(Outlet: ${info.locality || info.areaName || "Unknown"})`;
    document.getElementById("footer-address").textContent = info.areaName || info.locality || "Address not available";
  }
   catch (error) {
    console.error("Error fetching restaurant info:", error);
   }
});
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css";

body {
  background-color: #fafafa;
  font-family: "Poppins", sans-serif;
}
.deal-of-day {
  width: max-content;
  height: 60px;
}
.box {
  width: 100%;
  border: 2px solid lightgray;
  border-radius: 20px;
  box-shadow: 0px 9px 3px 10px rgb(233, 230, 230);
}
.breadcrumb {
  background: none;
  font-size: 14px;
  margin-top: 15px;
}
.rating {
  width: 100px;
  background-color: white;
  color: black;
}
a {
  color: grey;
}
.star {
  color: white;
  background-color: green;
  border-radius: 50%;
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
}
.deals-section {
  position: relative;
}
.deal-scroll {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
}
.deal-scroll::-webkit-scrollbar {
  display: none;
}
.deal-card {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  padding: 12px 20px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  min-width: 260px;
  margin-right: 15px;
}
.deal-icon {
  margin-right: 12px;
  font-size: 20px;
  color: #ff6600;
}
.scroll-btns {
  position: absolute;
  right: 0;
  top: 0;
}
.scroll-btn {
  background-color: #f2f2f2;
  border-radius: 50%;
  padding: 8px 10px;
  margin-left: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.scroll-btn:hover {
  background-color: #ddd;
}
.main-container {
  margin-left: 350px;
  margin-right: 350px;
}
.menu-title {
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 20px;
  position: relative;
}
.menu-title::before,
.menu-title::after {
  content: "❧";
  color: gray;
  margin: 0 10px;
}
.search-bar {
  background-color: #e9e9e9;
  border-radius: 15px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search-bar input {
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  font-weight: 500;
}
.filter-buttons {
  margin-top: 20px;
}
.filter-btn {
  border-radius: 25px;
  padding: 5px 15px;
  font-size: 14px;
  margin-right: 10px;
  border: 1px solid lightgray;
  display: inline-flex;
  align-items: center;
}
.veg-icon,
.nonveg-icon {
  width: 16px;
  height: 16px;
  border: 1.5px solid;
  border-radius: 3px;
  display: inline-block;
  margin-right: 5px;
  position: relative;
}
.veg-icon::after {
  content: "";
  width: 8px;
  height: 8px;
  background-color: green;
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 50%;
}
.nonveg-icon::after {
  content: "";
  width: 8px;
  height: 8px;
  background-color: red;
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 50%;
}
.bestseller-btn {
  border-radius: 25px;
  padding: 5px 15px;
  font-size: 14px;
  border: 1px solid lightgray;
}
.card-carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 15px;
  padding-bottom: 10px;
  scrollbar-width: none;
}
.card-carousel::-webkit-scrollbar {
  display: none;
}
.card-carousel .card {
  flex: 0 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.menu-item {
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0;
  border-top: 1px solid #eaeaea;
}

.item-info {
  flex: 1;
  min-width: 0;
}

.item-info .font-weight-bold {
  font-size: 16px;
  color: #222;
  margin-bottom: 5px;
}

.text-success.font-weight-bold {
  font-size: 15px;
}

.text-muted.small {
  font-size: 13px;
  line-height: 1.4;
}

.menu-item .text-center {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.food-img {
  width: 130px;
  height: 130px;
  border-radius: 10px;
  object-fit: cover;
}

.menu-item button {
  margin-top: 10px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
  background-color: white;
  border: 1px solid #ccc;
  color: green;
}

.menu-item button:hover {
  border-color: #28a745;
}

.food-img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
}
.img {
  width: 150px;
  height: 50px;
}
.fssat {
  width: 60px;
  height: 30px;
}
.logo-section {
  justify-content: center;
  gap: 10px;
}
.footer-div {
  background-color: rgb(191, 187, 187);
  padding: 20px;
  height: auto;
}

@media (max-width: 1200px) {
  .main-container {
    margin-left: 150px;
    margin-right: 150px;
  }
}
@media (max-width: 992px) {
 .menu-item {
    gap: 12px;
    padding: 15px 0;
  }

  .food-img {
    width: 110px;
    height: 110px;
  }

  .item-info .font-weight-bold {
    font-size: 15px;
  }

  .text-muted.small {
    font-size: 12px;
  }

}
@media (max-width: 768px) {
 .menu-item {
    gap: 10px;
    padding: 12px 0;
  }

  .food-img {
    width: 90px;
    height: 90px;
  }

  .item-info .font-weight-bold {
    font-size: 14px;
  }

  .text-muted.small {
    font-size: 11.5px;
  }

  .menu-item button {
    font-size: 12px;
    padding: 4px 10px;
  }
}
@media (max-width: 576px) {
  .main-container {
    margin: 0 10px;
  }
   .scroll-btn {
   display: none;
  }
  .breadcrumb {
    font-size: 12px;
  }
  .food-img {
    width: 90px;
    height: 90px;
  }
  .deal-card {
    min-width: 160px;
  }
     .menu-item {
    display: none !important;
     }
}
</style>
