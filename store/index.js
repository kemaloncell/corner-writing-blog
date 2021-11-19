import Vuex from 'vuex';
import axios from 'axios';
const createStore = () => {
  return new Vuex.Store({
    state: {
      fethedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.fethedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://corner-posts-nuxtjs-default-rtdb.firebaseio.com/posts.json').then((res) => {
          let data = res.data;
          let postArray = [];
          for (let key in data) {
            postArray.push({ id: key, ...data[key] });
          }
          vuexContext.commit('setPosts', postArray);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      },
    },
    getters: {
      getPosts(state) {
        return state.fethedPosts;
      },
    },
  });
};
export default createStore;
