<template>
  <PostDetail :post="fetchedPost" />
</template>

<script>
import PostDetail from '@/components/post/PostDetail';
import axios from 'axios';
export default {
  components: {
    PostDetail,
  },
  asyncData(context) {
    return axios.get(`${process.env.baseURL}posts/${context.params.postId}.json`).then((res) => {
      return {
        fetchedPost: res.data,
      };
    });
  },
};
</script>
