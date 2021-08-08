<template>
  <div>
    <Comment v-for="(data, key) in comments" :key="key" :information="data" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import GameComment from "@interfaces/IGameComment";
import Comment from "@molecules/Comment.vue";

export default defineComponent({
  components: { Comment },
  props: {
    comments: {
      type: Array as PropType<GameComment[]>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
div {
  display: grid;
  row-gap: 1px;
}
</style>
