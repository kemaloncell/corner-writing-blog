import Vuex from 'vuex';

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
