<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <Post v-for="index in 5" :is-admin="isAdmin" :key="index" />
  </div>
</template>

<script>
import Post from './Post.vue';
export default {
  components: {
    Post,
  },
  props: {
    // isAdmin || is-admin both are same
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
