<template lang="">
  <img :src="source" alt="circular-image" />
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

type SizeType = "default";

export default defineComponent({
  props: {
    size: String as PropType<SizeType>,
    source: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
img {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  object-fit: cover;
}
</style>
