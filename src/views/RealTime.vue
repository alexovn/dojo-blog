<template>
  <div>
    <h1>Real time data</h1>
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const posts = ref([]);

projectFirestore.collection('posts')
  .orderBy('createdAt', 'desc')
  .onSnapshot(snap => {
    let docs = snap.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      }
    })

    posts.value = docs;
  })

</script>

<style lang="scss" scoped>

</style>