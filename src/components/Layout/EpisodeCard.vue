<template>
  <v-card
    :loading="loading"
    class="mx-auto my-1"
    max-width="286"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title>{{episode.title}}</v-card-title>

    <v-card-text>
      <v-row>
        <div class="grey--text ml-4">
        <strong>Сезон: {{episode.season}} серия: {{episode.episode}}</strong><br>
        Дата выхода: {{episode.air_date}}
        </div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Герои</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip
          v-for="actor in episode.characters"
          :key="actor"
        >{{actor}}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EpisodeCard",
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
      loading: false,
      selection: 0,
    };
  },
  props: ['episode'],
  mounted() {

  },
  beforeMount() {

  },
};
</script>

<style scoped lang="scss">

</style>
