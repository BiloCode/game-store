<script lang="ts">
import { defineComponent } from "vue";
import Text from "../atoms/Text.vue";

export default defineComponent({
  components: { Text },
  props: {
    bottomBorder: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    amount: {
      type: String,
      required: true
    }
  }
});
</script>

<template>
  <div :class="{ bottomBorder }">
    <Text color="blue" size="e-small">{{ title }}</Text>
    <Text color="blue" size="e-small">{{ amount }}</Text>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/variables";

div {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.bottomBorder {
    border-bottom: 1px solid $blue-light-max;
  }
}
</style>
