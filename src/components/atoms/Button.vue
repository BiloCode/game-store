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
button {
  --bg: var(--dark-blue-light);
  --text: var(--blue);

  width: 100%;
  height: 48px;
  background-color: var(--bg);
  color: var(--text);
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &.green {
    --bg: var(--green);
    --text: #fff;
  }

  &:active {
    opacity: 0.9;
  }
}
</style>
