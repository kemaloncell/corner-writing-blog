<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <Post v-for="index in 5" :key="index" />
  </div>
</template>

<script>
import Post from './Post.vue';
export default {
  components: {
    Post,
  },
  Post,
};
</script>

<style></style>
