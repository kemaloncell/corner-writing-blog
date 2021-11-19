<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <form style="width: 500px" @submit.prevent="onSubmit">
      <fieldset>
        <legend v-if="isUpdate">Edit Corner Post</legend>
        <legend v-else>New Corner Post</legend>
        <div class="form-group">
          <label>Author Name</label>
          <input v-model="post.author" type="text" class="form-control" placeholder="Name.." />
        </div>
        <div class="form-group">
          <label>Title</label>
          <input v-model="post.title" type="text" class="form-control" placeholder="Title.." />
        </div>
        <div class="form-group">
          <label>Sub Title</label>
          <input v-model="post.subTitle" type="text" class="form-control" placeholder="Sub Title.." />
        </div>
        <div class="form-group">
          <label>Corner Post</label>
          <textarea v-model="post.text" class="form-control" rows="5"></textarea>
        </div>
        <button @click="$router.push('/admin')" class="btn btn-danger">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    isUpdate: {
      type: Boolean,
      required: false,
      default: false,
    },
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      post: {
        title: null,
        subTitle: null,
        author: null,
        text: null,
      },
    };
  },
  created() {
    this.post = this.post
      ? this.post
      : {
          id: null,
          title: null,
          subTitle: null,
          text: null,
          author: null,
        };
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.post);
    },
  },
};
</script>
