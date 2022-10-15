<template>
  <div class="tag">
    <div v-if="posts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import PostList from '@/components/PostList.vue';
import TagCloud from '@/components/TagCloud.vue';
import getPosts from '@/composables/getPosts';
import Spinner from '@/components/Spinner.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const { posts, error, load } = getPosts();
load();

const filteredPosts = computed(() => {
  const route = useRoute();
  const arr = posts.value.filter(post => post.tags.includes(route.params.tag));
  return arr;
})

</script>

<style scoped>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>