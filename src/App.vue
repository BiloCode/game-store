<template>
  <Detail />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Detail from '@pages/Detail.vue';

export default defineComponent({
  name: 'App',
  components: {
    Detail
  }
});
</script>
