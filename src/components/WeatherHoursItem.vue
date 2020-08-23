<template>
  <div class="hoursItem">
    <div class="hoursItemDiv">
      <p>{temp}</p>
      <p>{type}</p>
    </div>
    <div class="time">
      <p>
        06:00
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherHoursItem"
};
</script>

<style scoped>
.hoursItemDiv {
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.hoursItem {
  border-top:1px solid black;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  display: block;
  width: 100%;
}
.time {
  height: 30px;
  line-height: 30px;
  border-top: 1px solid black;
}
</style>
