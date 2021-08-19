<script lang="ts">
import { computed, defineComponent } from "vue";

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
    const fillStars = computed(() => Math.min(props.amount, 5));
    const unfillStars = computed(() =>
      Math.min(Math.abs(fillStars.value - 5), 5)
    );

    return {
      fillStars,
      unfillStars
    };
  }
});
</script>

<template>
  <div>
    <StarFill v-for="n in fillStars" :key="n" />
    <StarUnFilled v-for="n in unfillStars" :key="n" />
  </div>
</template>

<style lang="scss" scoped>
div {
  display: grid;
  grid-template-columns: repeat(5, max-content);
}
</style>
