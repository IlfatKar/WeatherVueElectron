<template>
    <div class="main">
        <WeatherItem :temps="this.temps" :weather="this.weather"/>
<!--        <WeatherHours />-->
    </div>
</template>

<script>
  import WeatherItem from './WeatherItem'
  import WeatherHours from './WeatherHours'
  export default {
    name: 'Weather',
    components: {WeatherHours, WeatherItem},
      props:['temps', 'weather']
  }
</script>

<style scoped>
    .main{
        display: grid;
        grid-template-rows: auto 90px;
        border:1px solid black;
        margin-top: 15px;
        height: 60vh;
        padding-top: 15px;
    }

</style>