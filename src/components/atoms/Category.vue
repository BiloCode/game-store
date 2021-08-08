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
span {
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: calc(14px * 1.4);
  background-color: var(--green);
  border-radius: 8px;
  padding: 4px 1em;
}
</style>
