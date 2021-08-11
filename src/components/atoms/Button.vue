<template>
  <button :class="{ green }">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    green: Boolean
  }
});
</script>

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

  &:not(&.green):active {
    background-color: $dark-blue-light-b;
  }

  &.green {
    background-color: $green;
    color: #fff;

    &:active {
      background-color: lighten($green, 5);
    }
  }
}
</style>
