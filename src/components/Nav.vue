<template>
  <div class="container" :class="{'show': showSidebar}">
    <div class="control">
      <font-awesome-icon icon="bars" size="2x" @click="showNav" style="-webkit-app-region: no-drag;"/>
    </div>
    <div class="navigation-icons" style="-webkit-app-region: no-drag;">
      <router-link to="/">
        <font-awesome-icon icon="home" size="2x"/>
      </router-link>
      <router-link to="/changeRegion">
        <font-awesome-icon icon="map-marked" size="2x"/>
      </router-link>
      <router-link to="/settings/settings">
        <font-awesome-icon icon="cog" size="2x"/>
      </router-link>
      <router-link to="/feedback">
        <font-awesome-icon icon="comment" size="2x"/>
      </router-link>

    </div>
    <div class="navigation-links" style="-webkit-app-region: no-drag;">
      <transition-group name="fade">
        <div v-show="showLink" key="1">
          <router-link to="/">{{'MainPage' | localize}}</router-link>
        </div>
        <div v-show="showLink" key="2">
          <router-link to="/changeRegion">{{'ChangeCity' | localize}}</router-link>
        </div>
        <div v-show="showLink" key="3">
          <router-link to="/settings/settings">{{'Settings' | localize}}</router-link>
        </div>
        <div v-show="showLink" key="4">
          <router-link to="/feedback">{{'Feedback' | localize}}</router-link>
        </div>
      </transition-group>
    </div>
    <div>
      <div class="exitDiv">
        <div class="exit" @click.prevent="exit">
          <router-link @click.prevent="exit" to="#">
            <font-awesome-icon icon="door-open" size="2x"/>
          </router-link>
        </div>
        <transition-group name="fade">
          <div class="exitText" v-show="showLink" key="5" @click.prevent="exit">
            <router-link to="#" @click.prevent="exit">{{'Exit' | localize}}</router-link>
          </div>
        </transition-group>
      </div>


    </div>
  </div>
</template>

<style scoped>
  .exitDiv {
    display: flex;
    position: absolute;
    -webkit-app-region: no-drag;
    bottom: 20px;
    left: 15px;

  }

  .exitText {
    position: absolute;
    margin-top: 5px;
    font-size: 1.35rem;
    padding-left: 15px;
    /*margin-bottom: 2.3rem;*/
    cursor: pointer;
    -webkit-app-region: no-drag;
  }

  .exit svg {
    -webkit-app-region: no-drag;
    transition: 1s;
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    padding: 10px;
    min-height: calc(100vh - 20px);
    /*background-color: rgb(255, 255, 255);*/
    border-right: 1px solid #000000;
    z-index: 999;
    transition: all 0.5s ease-in-out;
  }

  .container .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    cursor: pointer;
    margin-bottom: 25px;
  }

  .container .control svg {
    margin-top: 10px;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

  }

  .container.show {
    width: 250px;
  }

  .container.show .control > svg {
    transform: rotateZ(-180deg);
  }

  .container .navigation-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50px;
    cursor: pointer;
    float: left;

  }

  .container .navigation-icons svg {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    margin-bottom: 30px;
  }

  .container .navigation-links {
    float: left;
  }

  .container .navigation-links div {
    margin-top: 4px;
    font-size: 1.35rem;
    padding-left: 10px;
    margin-bottom: 2.27rem;
    cursor: pointer;
  }

  .fade-enter-active:nth-child(1), .fade-leave-active:nth-child(1) {
    transition: transform linear calc(.1s * 1), display 0.5s;
  }

  .fade-enter-active:nth-child(2), .fade-leave-active:nth-child(2) {
    transition: transform linear calc(.1s * 2), display 0.5s;
  }

  .fade-enter-active:nth-child(3), .fade-leave-active:nth-child(3) {
    transition: transform linear calc(.1s * 3), display 0.5s;
  }

  .fade-enter-active:nth-child(4), .fade-leave-active:nth-child(4) {
    transition: transform linear calc(.1s * 4), display 0.5s;
  }

  .fade-enter-active:nth-child(5), .fade-leave-active:nth-child(5) {
    transition: transform linear calc(.1s * 5), display 0.5s;
  }

  .fade-enter, .fade-leave-to {
    transform: scale(0);
  }

  a {
    color: black;
    text-decoration: none;
  }

  /* HOME PAGE */
</style>

<script>
  import {ipcRenderer} from 'electron'

  export default {
    data: () => {
      return {
        showSidebar: false,
        showLink: false
      }
    },
    methods: {
      showNav() {
        if (this.showSidebar) {
          this.showLink = false
          setTimeout(() => {
            this.showSidebar = false
          }, 500)
        } else {
          this.showSidebar = true
          setTimeout(() => {
            this.showLink = true
          }, 500)
        }
      },
      exit() {
        console.log('exit')
        ipcRenderer.send('exit')
      }
    },
  }
</script>
