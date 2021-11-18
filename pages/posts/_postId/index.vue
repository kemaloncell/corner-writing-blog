<template>
  <PostDetail :post="fetchedPost" />
</template>

<script>
import PostDetail from '@/components/post/PostDetail';
export default {
  components: {
    PostDetail,
  },
  // this.$route.params.postId == context.params.postId
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPost: {
          id: '1',
          title: 'JavaScript',
          subTitle: 'We are learn Js ',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam adipisci quos minus debitis ducimus molestias deserunt impedit voluptas.',
          author: 'Kemal Öncel',
        },
      });
    }, 1500);
  },
};
</script>
