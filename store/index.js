import Vuex from 'vuex';
import axios from 'axios';
const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.fetchedPosts = posts;
      },
      addPost(state, post) {
        state.fetchedPosts.push(post);
      },
      updatePost(state, editedPost) {
        let post_index = state.fetchedPosts.findIndex((post) => post.id == editedPost.id);
        if (post_index) {
          state.fetchedPosts[post_index] = editedPost;
        }
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.get(`${process.env.baseURL}posts.json`).then((res) => {
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
      addPost(vuexContext, post) {
        return this.$axios
          .post(`${process.env.baseURL}posts.json`, post)
          .then((res) => {
            return vuexContext.commit('addPost', { ...post, id: res.data.name });
          })
          .catch((err) => console.log(err));
      },
      updatePost(vuexContext, editedPost) {
        return this.$axios
          .put(`${process.env.baseURL}posts/${editedPost.id}.json`, editedPost)
          .then((res) => {
            vuexContext.commit('updatePost', editedPost);
          })
          .catch((err) => console.log(err));
      },
    },
    getters: {
      getPosts(state) {
        return state.fetchedPosts;
      },
    },
  });
};
export default createStore;
