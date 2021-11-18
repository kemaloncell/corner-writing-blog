<template>
  <div class="card mr-3 mb-3 card-success" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ post.subTitle }}</h6>
      <p class="card-text">{{ post.text }}.</p>

      <div v-if="isAdmin" class="admin-button-container">
        <a href="#" @click.prevent="$router.push(`/admin/${post.id}`)" class="btn btn-outline-warning btn-sm">Edit</a>
        <a href="#" class="btn btn-outline-danger btn-sm">Delete</a>
      </div>
      <a v-else href="#" @click.prevent="$router.push(`/posts/${post.id}`)" class="btn btn-outline-info btn-sm">Show</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
    },
    post: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style></style>
