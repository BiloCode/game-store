<template>
  <div>
    <StarFill v-for="n in amount" :key="n" />
    <StarUnFilled v-for="n in unfillStars()" :key="n" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import StarFill from "@atoms/StarFill.vue";
import StarUnFilled from "@atoms/StarUnFilled.vue";

export default defineComponent({
  components: { StarFill, StarUnFilled },
  props: {
    amount: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const unfillStars = () => Math.abs(props.amount - 5);

    return {
      unfillStars
    };
  }
});
</script>

<style lang="scss" scoped>
div {
  display: grid;
  grid-template-columns: repeat(5, max-content);
}
</style>
