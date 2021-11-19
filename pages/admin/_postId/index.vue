<template>
  <PostForm @submit="updatePost($event)" :post="fetchedPost" :is-update="true" />
</template>

<script>
import PostForm from '@/components/admin/PostForm';
import axios from 'axios';
export default {
  components: {
    PostForm,
  },
  asyncData(context) {
    return axios.get(`https://corner-posts-nuxtjs-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`).then((res) => {
      return {
        fetchedPost: res.data,
      };
    });
  },
  methods: {
    updatePost(editedPost) {
      axios
        .put(`https://corner-posts-nuxtjs-default-rtdb.firebaseio.com/posts/${this.$route.params.postId}.json`, editedPost)
        .then((res) => {
          this.$router.push('/admin');
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
