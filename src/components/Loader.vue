<template>
  <div
      class="loadingio-eclipse">
    <div class="ldio-rpinwye8j0b">
      <div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Loader",

  };
</script>

<style scoped>
  @keyframes ldio-rpinwye8j0b {
    0% { transform: rotate(0deg) }
    50% { transform: rotate(180deg) }
    100% { transform: rotate(360deg) }
  }
  .ldio-rpinwye8j0b div {
    position: absolute;
    animation: ldio-rpinwye8j0b 1s linear infinite;
    width: 160px;
    height: 160px;
    top: 100px;
    left: calc(50vw - 160px);
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 4px 0 0 #e15b64;
    transform-origin: 80px 82px;
  }
  .loadingio-eclipse {
    width: 100%;
    height: 800px;
    display: inline-block;
    overflow: hidden;
  }
  .ldio-rpinwye8j0b {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-rpinwye8j0b div { box-sizing: content-box; }
</style>
