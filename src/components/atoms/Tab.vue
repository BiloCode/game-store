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
@import "../../styles/variables";

button {
  width: 100%;
  height: 48px;
  margin: 0;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: $blue;
  background: transparent;
  box-sizing: border-box;
  user-select: none;
  border-bottom: 3px solid transparent;

  &.active {
    color: $blue-light;
    border-bottom-color: $blue-light;
  }

  &:not(&.active):hover {
    background-color: $dark-blue-light;
  }
}
</style>
