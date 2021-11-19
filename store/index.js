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
      nuxtServerInit(vuexContext, context) {
        vuexContext.commit('setPosts', [
          { id: 1, title: 'Nuxt.js', subTitle: 'I learn Nuxt.js', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', author: 'Kemal Öncel' },
          { id: 2, title: 'Node.js', subTitle: 'I learn Node.js', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', author: 'Kemal Öncel' },
        ]);
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
