<template>
  <div>
    <p>Ветер: {{this.wind.speed}} м/с. С углом в {{this.wind.deg}}°</p>
    <p>Давление: {{Math.floor(this.main.pressure * 0.75006375541921)}} мм. ртутного столба</p>
    <p>Влажность: {{this.main.humidity}}%</p>
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