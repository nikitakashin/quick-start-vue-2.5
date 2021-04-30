<template>
  <v-card class="header">
    <v-toolbar
      dark
      color="purple"
    >
      <v-btn
        icon
        dark
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>Breaking bad</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Header",
  components: {

  },
  data: () => ({

  }),
  methods: {
    ...mapActions([

    ]),
  },
  computed: {
    ...mapGetters([

    ]),
  },
  mounted() {

  },
}
</script>

<style scoped lang="scss">
.header {
  border-radius: 0;
  z-index: 5;
}
</style>
