<script lang="ts">
import { defineComponent, PropType } from "vue";

type TColor = "green" | "red";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String as PropType<TColor>
    },
    small: Boolean
  },
  setup(props) {
    const setClass = () => ({
      green: props.color === "green",
      red: props.color === "red"
    });

    return {
      setClass
    };
  }
});
</script>

<template>
  <button :class="{ ...setClass(), small }">{{ text }}</button>
</template>

<style lang="scss" scoped>
@import "../../styles/variables";

button {
  width: 100%;
  height: 48px;
  color: $blue;
  background-color: $dark-blue-light;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  background-color: $dark-blue-light-b;

  &.green {
    background-color: $green;
    color: #fff;

    &:active {
      background-color: lighten($green, 5);
    }
  }

  &.red {
    background-color: $red;
    color: #fff;

    &:active {
      background-color: lighten($red, 5);
    }
  }

  &.small {
    height: 40px;
    font-size: 14px;
  }
}
</style>
