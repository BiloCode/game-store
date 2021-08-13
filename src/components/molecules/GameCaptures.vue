<template>
  <div>
    <figure v-for="(capture, index) in captures" :key="index">
      <Image cover :source="capture" :alt="capture + index" />
    </figure>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Image from "@atoms/Image.vue";

export default defineComponent({
  components: { Image },
  props: {
    captures: {
      type: Array as PropType<string[]>,
      default: () => []
    }
  }
});
</script>

<style lang="scss" scoped>
div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  figure {
    width: 100%;
    height: 180px;
    margin: 0;
    cursor: pointer;
    position: relative;
    border-radius: 10px;

    &:hover img {
      filter: brightness(80%);
    }
  }
}
</style>
