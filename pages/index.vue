<template>
  <div>
    <PostList :posts="fetchedPosts" />
    <About />
  </div>
</template>

<script>
import PostList from '@/components/post/PostList';
import About from '@/components/home/About';
export default {
  components: {
    PostList,
    About,
  },
  created() {
    // this.$store.dispatch('setPosts', this.fetchedPosts);
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters.getPosts;
    },
  },
  fetch(context) {
    return new Promise((resolve, reject) => {
      resolve(
        context.store.dispatch('setPosts', [
          { id: 1, title: 'Nuxt.js', subTitle: 'I learn Nuxt.js', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', author: 'Kemal Öncel' },
          { id: 2, title: 'Node.js', subTitle: 'I learn Node.js', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', author: 'Kemal Öncel' },
        ])
      );
    }).catch((err) => {
      context.error(new Error());
    });
  },
};
</script>

<style scoped></style>
