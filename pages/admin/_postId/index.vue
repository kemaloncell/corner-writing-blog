<template>
  <PostForm :post="loadedPost" :is-update="true" />
</template>

<script>
import PostForm from '@/components/admin/PostForm';
export default {
  components: {
    PostForm,
  },
  data() {
    return {
      loadedPost: { id: 1, title: 'Nuxt.js', subTitle: 'I learn Nuxt.js', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', author: 'Kemal Öncel' },
    };
  },
};
</script>

<style></style>
