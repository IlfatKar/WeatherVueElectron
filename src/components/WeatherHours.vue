<template>
  <div class="weatherHours">
    <WeatherHoursItem v-for="n in 6" :key="n" />
  </div>
</template>

<script>
import WeatherHoursItem from "./WeatherHoursItem";
export default {
  name: "WeatherHours",
  components: { WeatherHoursItem }
};
</script>

<style scoped>
.weatherHours {
  display: flex;

}
</style>
