<template>
    <div class="date">
        <h2>22.08.2020</h2>
        <div class="temp">
            <p>День: tempDay</p>
            <p>Ночь: tempNight</p>
        </div>

        <span>png</span>
    </div>
</template>

<script>
  export default {
    name: 'HomeNavItem'
  }
</script>

<style scoped>
    .date{
        padding-left: 15px;
        line-height: 72px;
        height: 72px;
        width: 33%;
        display: grid;
        grid-template-columns: 30% 50% 20%;
        border-right: 1px solid black;
    }
    .temp{
        line-height: 36px;
    }
    h2{
        font-size: 1.75vw;
    }
</style>