<template>
  <div>
    <p>{{'Wind' | localize}}: {{this.wind.speed}} {{'m/s' | localize}}. {{'Angle' | localize}} {{this.wind.deg}}°</p>
    <p>{{'Pressure' | localize}}: {{Math.floor(this.main.pressure * 0.75006375541921)}} {{'mm' | localize}}
      {{'OfMercury' | localize}}</p>
    <p>{{'Humidity' | localize}}: {{this.main.humidity}}%</p>
  </div>
</template>

<script>
  export default {
    name: 'Descr',
    props:['main', 'wind'],

  }
</script>

<style scoped>
  div{
    margin-top: 15px;
    margin-left: 15px;
  }
  p{
    line-height: 60px;
    font-size: 2rem;
  }
</style>