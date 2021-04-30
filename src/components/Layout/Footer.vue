<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="purple ">
        <strong class="subheading">Тестовое задание</strong>

        <v-spacer></v-spacer>

      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Выполнил <a href="https://commondev.ru/resume">Кашин Никита</a></strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Footer",
  components: {

  },
  methods: {
    ...mapActions([

    ]),
  },
  computed: {
    ...mapGetters([

    ]),
  },
  data() {
    return {

    };
  },
  mounted() {

  },
  beforeMount() {

  },
};
</script>

<style scoped lang="scss">

</style>
