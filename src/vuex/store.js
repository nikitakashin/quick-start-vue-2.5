import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

Vue.use(Vuex);

const BASE_URL = 'https://www.breakingbadapi.com/api/';

let store = new Vuex.Store({
  state: {
    episodes: [],
    episodes_by_season: [],
  },

  mutations: {
    PUT_ALL_EPISODES_TO_STATE: (state, episodes) => {
      state.episodes = episodes;
    },

    PUT_ALL_EPISODES_OF_SEASON_TO_STATE: (state, season) => {
      let list = [];
      for (let episode of state.episodes) {
        if (String(episode.season) === String(season)){
          list.push(episode);
        }
      }
      state.episodes_by_season = list;
    }
  },

  actions: {
    GET_ALL_EPISODES({commit}){
      axios({
        method: 'get',
        url: BASE_URL+'episodes',
      }).then((response) => {
        commit('PUT_ALL_EPISODES_TO_STATE', response.data);
        commit('PUT_ALL_EPISODES_OF_SEASON_TO_STATE', 1);
      }).catch((error) => {
        console.error(error);
        return error;
      })
    },

    OPEN_SEASON({commit}, season) {
      commit('PUT_ALL_EPISODES_OF_SEASON_TO_STATE', season);
    }
  },

  getters: {
    EPISODES(state) {
      return state.episodes;
    },

    EPISODES_BY_SEASON(state) {
      return state.episodes_by_season;
    }
  }
  
});

export default store;
