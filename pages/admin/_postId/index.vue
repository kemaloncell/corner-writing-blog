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
    return axios.get(`${process.env.baseURL}posts/${context.params.postId}.json`).then((res) => {
      return {
        fetchedPost: res.data,
      };
    });
  },
  methods: {
    updatePost(editedPost) {
      this.$store.dispatch('updatePost', { ...editedPost, id: this.$route.params.postId }).then((res) => {
        this.$router.push('/admin');
      });
    },
  },
};
</script>

<style></style>
