<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center">
      <button class="btn btn-dark">Add a new post</button>
    </div>
    <PostList />
  </div>
</template>

<script>
import PostList from '@/components/post/PostList';
export default {
  layout: 'admin',
  components: {
    PostList,
  },
};
</script>

<style scoped></style>
