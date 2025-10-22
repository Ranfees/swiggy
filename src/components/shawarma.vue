<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h5>{{ description }}</h5>

    <div class="filters">
      <button class="filter-btn">Filter</button>
      <button class="filter-btn">Sort By</button>
    </div>

    <h2>Restaurants to explore</h2>
    <div id="app2" class="app2"></div>
  </div>
</template>

<script>
export default {
  name: "Biryani",
  data() {
    return {
      title: "Loading...",
      description: "",
    };
  },
  mounted() {
    this.loadRestaurants();
  },
  methods: {
    async loadRestaurants() {
      try {
        const req = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51600&lng=76.21570&collection=80402&tags=layout_Shawarma_Contextual&sortBy=&filters=&type=rcv2&offset=0&page_type=null" );
        const res = await req.json();
        const data = res.data.cards;

        const headerCard = data[0]?.card?.card;
        if (headerCard) {
          this.title = headerCard.title || "Biryani";
          this.description = headerCard.description ||"Flavours wrapped in nostalgia and banana leaves";
        }

        const filtered = data.filter((i) => i.card?.card?.info);
        const app2 = document.getElementById("app2");

        filtered.forEach((item) => {
          const info = item.card.card.info;
          const imgId = info.cloudinaryImageId;
          if (!imgId) return;

          const card = document.createElement("div");
          card.classList.add("card");

          const imgBox = document.createElement("div");
          imgBox.classList.add("img-box");

          const img = document.createElement("img");
          img.src = `https://media-assets.swiggy.com/swiggy/image/upload/${imgId}`;
          img.alt = info.name;

          const offer = document.createElement("div");
          offer.classList.add("offer-text");
          offer.textContent = info.aggregatedDiscountInfoV3 ? `${info.aggregatedDiscountInfoV3.header} ${info.aggregatedDiscountInfoV3.subHeader || ""}`: "";

          imgBox.append(img, offer);

          const content = document.createElement("div");
          content.classList.add("card-content");

          const title = document.createElement("h4");
          title.textContent = info.name || "Unnamed";

          const ratingTime = document.createElement("div");
          ratingTime.classList.add("rating-time");

          const rating = document.createElement("div");
          rating.classList.add("rating");
          rating.textContent = info.avgRating || "-";

          const time = document.createElement("span");
          time.textContent = `• ${info.sla?.slaString || "N/A"}`;

          ratingTime.append(rating, time);

          const cuisines = document.createElement("div");
          cuisines.classList.add("cuisines");
          cuisines.textContent = (info.cuisines || []).join(", ").slice(0, 45) + "...";

          const area = document.createElement("div");
          area.classList.add("area");
          area.textContent = info.locality || "";

          content.append(title, ratingTime, cuisines, area);
          card.append(imgBox, content);
          app2.append(card);
        });
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    },
  },
};
</script>

<style>
.container {
  padding: 0 20px;
  max-width: 1200px;
  margin: auto;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 5px;
}

h5 {
  font-size: 18px;
  font-weight: 400;
  color: #555;
  margin-bottom: 25px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.filter-btn {
  border: 1px solid #ddd;
  border-radius: 50px;
  background-color: white;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.filter-btn:hover {
  background-color: #f7f7f7;
  border-color: #bbb;
}

h2 {
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 20px;
}

.app2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  justify-items: center;
}

.card {
  width: 100%;
  max-width: 250px;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.03);
}

.img-box {
  position: relative;
  height: 160px;
  border-radius: 16px;
  overflow: hidden;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  transition: transform 0.3s ease;
}

.card:hover img {
  transform: scale(1.05);
}

.offer-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  font-weight: 700;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 0 0 16px 16px;
}

.card-content {
  padding: 10px 12px 15px 12px;
}

.card h4 {
  font-size: 15px;
  font-weight: 600;
  color: #222;
  margin-bottom: 4px;
}

.rating-time {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
}

.rating {
  background: #16a34a;
  color: white;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
}

.cuisines,
.area {
  font-size: 13px;
  color: #666;
  line-height: 1.4;
}

/* ---------- RESPONSIVE ---------- */
@media (max-width: 1024px) {
  .container {
    padding: 0 16px;
  }

  .app2 {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 28px;
  }

  h5 {
    font-size: 16px;
  }

  .app2 {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
  }

  .card {
    max-width: 100%;
  }

  .img-box {
    height: 140px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 22px;
  }

  h5 {
    font-size: 14px;
  }

  .filter-btn {
    padding: 6px 12px;
    font-size: 13px;
  }

  .app2 {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 15px;
  }

  .img-box {
    height: 130px;
  }

  .card-content {
    padding: 8px 10px 12px 10px;
  }

  .card h4 {
    font-size: 14px;
  }

  .rating-time {
    font-size: 13px;
  }

  .cuisines,
  .area {
    font-size: 12px;
  }
}
</style>
