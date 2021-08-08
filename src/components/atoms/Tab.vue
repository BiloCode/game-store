<template>
  <button :class="{ active }">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      require: true
    }
  }
});
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  height: 48px;
  margin: 0;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  color: var(--blue);
  background: transparent;
  box-sizing: border-box;
  border-bottom: 3px solid transparent;

  &.active {
    color: var(--blue-light);
    border-bottom-color: var(--blue-light);
  }

  &:hover {
    opacity: 0.9;
  }
}
</style>
