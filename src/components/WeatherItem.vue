<template>
  <div id="main">
    <div>
      <h2>{{ this.date | date }}</h2>
      <div class="dayNight">
        <p>Температура сейчас: {{ Math.round(this.temps.temp) }}°C</p>
        <p>Максимальная температура: {{ this.temps.temp_min }}°C</p>
        <p>Минимальная температура: {{ this.temps.temp_max }}°C</p>
      </div>
      <p class="type">
        {{
          this.weather[0].description[0].toUpperCase() +
            this.weather[0].description.slice(1)
        }}
      </p>
    </div>
    <div>
      <img :src="getImgUrl(this.weather[0].icon)" :alt="this.weather[0].icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherItem",
  data: () => ({
    date: new Date()
  }),
  props: ["temps", "weather"],
  methods: {
    getImgUrl(img) {
      let images = require.context("../assets/icons/", false, /\.png$/);
      return images("./" + img + ".png");
    }
  }
};
</script>

<style scoped>
h2 {
  font-weight: 400;
  font-size: 3rem;
}
.dayNight p {
  font-size: 1.5rem;
}
.type {
  font-size: 1.5rem;
}
#main {
  line-height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 15px;
}
  img{
    width: 200px;
    float: right;
  }
</style>
