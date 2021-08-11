<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";

type Size = "contain";

export default defineComponent({
  props: {
    size: {
      type: Number || (String as PropType<Size>),
      default: "contain"
    }
  }
});
</script>

<style lang="scss" scoped>
button {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}
</style>
