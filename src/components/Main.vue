<template>
<div>
  <v-sheet elevation="6" rounded>
    <v-tabs
      background-color="cyan"
      dark
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
    >
      <v-container>
        <v-sheet rounded>
          <v-tabs
            background-color="cyan"
            dark
            next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline"
            show-arrows
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
              v-for="i in this.getSeasons(this.EPISODES).length"
              :key="i"
              :href="'#tab-' + i"
              @click="OPEN_SEASON(i)"
            >
              Сезон {{ i }}
            </v-tab>
          </v-tabs>
        </v-sheet>
      </v-container>
    </v-tabs>
  </v-sheet>
  
  <v-divider class="my_divider"></v-divider>

  <v-container>
    <v-row class="card_container" justify="center">
      <div 
        class="card_wrapper"
        v-for="episode in EPISODES_BY_SEASON"
        :key="episode.episode_id"
      >
        <EpisodeCard v-bind:episode="episode" />
      </div>
    </v-row>
  </v-container>

  <v-divider class="my_divider"></v-divider>

</div>

</template>

<script>
import { mapActions, mapGetters } from "vuex";
import EpisodeCard from './Layout/EpisodeCard'

export default {
  name: "Main",

  components: {
    EpisodeCard
  },

  methods: {
    ...mapActions([
      'GET_ALL_EPISODES',
      'OPEN_SEASON',
    ]),

    getSeasons: function(episodes) {
    // Возвращает количество список сезонов
      let seasons = [];
      for (let episode of episodes) {
        if (seasons.find(item => parseInt(item, 10) === parseInt(episode.season, 10)) === undefined){
          seasons.push(episode.season);
        }
      }
      return seasons
    },
  },

  computed: {
    ...mapGetters([
      'EPISODES',
      'EPISODES_BY_SEASON',
    ]),
  },

  beforeMount() {
    this.GET_ALL_EPISODES();
  }
};
</script>

<style scoped lang="scss">
.card_wrapper {
  padding-left: 5px;
  padding-right: 5px;
}

.my_divider {
  margin-top: 40px;
  border-color: rgba(0,0,0,0.0);
}
</style>
