<script lang="ts">
import { defineComponent, PropType } from "vue";

type TextWeight = "bold" | "default" | "regular";
type TextSize = "big" | "default" | "small" | "e-small" | "normal";
type TextColor = "white" | "default" | "blue" | "blue-light";

export default defineComponent({
  props: {
    size: String as PropType<TextSize>,
    weight: String as PropType<TextWeight>,
    color: String as PropType<TextColor>,
    tached: Boolean
  },
  setup(props) {
    const setClass = () => ({
      big: props.size === "big",
      normal: props.size === "normal",
      small: props.size === "small",
      e_small: props.size === "e-small",
      bold: props.weight === "bold",
      regular: props.weight === "regular",
      white: props.color === "white",
      blue: props.color === "blue",
      blue_light: props.color === "blue-light",
      tached: props.tached
    });

    return {
      setClass
    };
  }
});
</script>

<template>
  <span :class="setClass()">
    <slot>Default Name</slot>
  </span>
</template>

<style lang="scss" scoped>
@import "../../styles/text_variables";

span {
  color: $default-color;
  font-size: $default-size;
  font-weight: $default-weight;
  line-height: $default-size * $line-multiplier;

  @each $key, $value in $colors {
    &.#{$key} {
      color: $value;
    }
  }

  @each $key, $value in $sizes {
    &.#{$key} {
      font-size: $value;
      line-height: $value * $line-multiplier;
    }
  }

  @each $key, $value in $weights {
    &.#{$key} {
      font-weight: $value;
    }
  }

  &.tached {
    text-decoration: line-through;
  }
}
</style>
