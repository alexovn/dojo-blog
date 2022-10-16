<template>
  <div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="post" class="post">
      <h3>
        {{ post.title }}
      </h3>
      <p class="pre">
        {{ post.body }}
      </p>
    </div>
    <div v-else>
      <Spinner />
    </div>
    <button @click="handleDelete" :style="{ margin: '10px auto' }">
      delete post
    </button>
  </div>
</template>

<script>
import getPost from '@/composables/getPost';
import Spinner from '@/components/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';
import { projectFirestore } from '../firebase/config';

export default {
  components: {
    Spinner
  },

  setup () {
    const route = useRoute();
    const router = useRouter();
    
    const { post, error, load } = getPost(route.params.id);

    load();

    const handleDelete = async () => {
      await projectFirestore.collection('posts')
        .doc(route.params.id)
        .delete();

      router.push({
        name: 'home'
      })
    }

    return {
      post,
      error,
      handleDelete 
    }
  }
}
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}

.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}
</style>