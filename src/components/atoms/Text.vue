<template>
  <span :class="setClass()">
    <slot>Default Name</slot>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type TextColor = "white" | "default" | "blue";
type TextSize = "big" | "default" | "small" | "e-small";
type TextWeight = "bold" | "default";

export default defineComponent({
  props: {
    size: String as PropType<TextSize>,
    weight: String as PropType<TextWeight>,
    color: String as PropType<TextColor>
  },
  setup(props) {
    const setClass = () => ({
      big: props.size === "big",
      small: props.size === "small",
      e_small: props.size === "e-small",
      bold: props.weight === "bold",
      white: props.color === "white",
      blue: props.color === "blue"
    });

    return {
      setClass
    };
  }
});
</script>

<style lang="scss" scoped>
span {
  --size: 22px;
  --line: calc(var(--size) * 1.4);

  color: var(--blue-light-max);
  font-size: var(--size);
  line-height: var(--line);
  font-weight: bolder;

  &.white {
    color: #fff;
  }

  &.blue {
    color: var(--blue);
  }

  &.e_small {
    --size: 14px;
  }

  &.small {
    --size: 16px;
  }

  &.big {
    --size: 28px;
  }

  &.bold {
    font-weight: bold;
  }
}
</style>
