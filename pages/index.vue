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
    this.$store.dispatch('setPosts', this.fetchedPosts);
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      resolve({
        fetchedPosts: [
          { id: 1, title: 'Nuxt.js', subTitle: 'I learn Nuxt.js', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', author: 'Kemal Öncel' },
          { id: 2, title: 'Node.js', subTitle: 'I learn Node.js', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', author: 'Kemal Öncel' },
        ],
      });
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        context.error(new Error());
      });
    /*   callback(null, {
      fetchedPosts: [
        { id: 1, title: 'Nuxt.js', subTitle: 'I learn Nuxt.js', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', author: 'Kemal Öncel' },
        { id: 2, title: 'Node.js', subTitle: 'I learn Node.js', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', author: 'Kemal Öncel' },
      ],
    }); */
  },
};
</script>

<style scoped></style>
