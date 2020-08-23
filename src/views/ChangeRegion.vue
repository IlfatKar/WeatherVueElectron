<template>
  <div class="home">
    <h4 v-if="this.$store.getters.error === 404">
      Город неправильный или не установлен!
    </h4>
    <form @submit.prevent="submitHandler" v-if="!this.loading">
      <label for="change">Введите город</label> <br />
      <input id="change" type="text" v-model.trim="city" /> <br />
      <small v-if="result">{{ this.result }}</small> <br v-if="result" />
      <button type="submit">Сохранить</button>
    </form>
    <Loader v-else />
  </div>
</template>

<script>
import Loader from "../components/Loader";
export default {
  name: "ChangeRegion",
  components: { Loader },
  data: () => ({ city: "", result: null, loading: false }),
  methods: {
    async submitHandler() {
      try {
        this.loading = true;
        this.$store.commit("setCity", this.city);
        await this.$store.dispatch("fetchData");
        if (this.$store.getters.data.cod === "404") {
          throw new Error("Incorrect city");
        }
        this.loading = false;
        this.$store.commit("setError", null);
        this.result = "Успех";
      } catch (e) {
        console.error(e);
        this.result = "Ошибка";
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.home {
  width: calc(100% - 70px);
  margin-left: 120px;
  padding-top: 50px;
  font-size: 2rem;
}
input {
  width: 300px;
  height: 30px;
}
button {
  height: 30px;
  width: 100px;
}
small {
  font-size: 1.5rem;
}
</style>
