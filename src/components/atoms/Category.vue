<template>
  <span>
    <slot>Default Category</slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      require: true
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

span {
  color: $blue-light;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px * $line-multiplier;
  background-color: $dark-blue-light;
  border-radius: 8px;
  padding: 2px 1em;
}
</style>
