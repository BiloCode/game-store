<template>
  <img :class="{ cover }" :src="source" :alt="alt" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    cover: Boolean,
    alt: String,
    source: {
      type: String,
      require: true
    }
  }
});
</script>

<style lang="scss" scoped>
img {
  width: inherit;
  height: inherit;
  border-radius: inherit;
  user-select: none;

  &.cover {
    object-fit: cover;
  }
}
</style>
