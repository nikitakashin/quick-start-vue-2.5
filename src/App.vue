<template>
  <transition name="bounce">
    <v-app>
      <Header />
      <v-main>
        <router-view />
      </v-main>
      <Footer />
    </v-app>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'

export default {
  name: 'app',

  components: {
    Header,
    Footer,

  }
}

</script>

<style lang="scss">
html {
  overflow:  hidden;
  width: 100% !important;
  height: 100% !important;
}

body {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  width: 100% !important;
  height: 100% !important;
  position: relative;
  overflow-x: hidden;
}

.container {
  padding-top: 0px;
}

.bounce-enter-active {
  animation: bounce-in 1.5s;
}

@keyframes bounce-in {
  0% {
    filter: brightness(0%);
  }
  100% {
    filter: brightness(100%);
  }
}

::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(78, 26, 67, 0.3);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(241, 144, 233);
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgb(224, 72, 217);
}
</style>
