<script lang="ts">
import { defineComponent } from "vue";

import Text from "@atoms/Text.vue";
import discountApply from "@utils/discountApply";

export default defineComponent({
  components: { Text },
  props: {
    price: {
      type: Number,
      required: true
    },
    discount: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const isHaveDiscount = props.discount > 0;
    const formatPrice = props.price.toFixed(2);
    const discountPrice = discountApply(props.price, props.discount);

    return {
      discountPrice,
      formatPrice,
      isHaveDiscount
    };
  }
});
</script>

<template>
  <div class="game-price">
    <div class="container">
      <div v-if="isHaveDiscount" class="prices-container">
        <Text color="white" size="big">{{ discountPrice }}</Text>
        <Text tached color="blue-light" weight="bold" size="small">
          {{ formatPrice }}
        </Text>
      </div>
      <Text v-if="!isHaveDiscount" color="white" size="big">
        {{ formatPrice }}
      </Text>
      <Text color="white" size="big">PEN</Text>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-price {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .container {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 0.7em;
  }

  .prices-container {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    column-gap: 8px;
  }
}
</style>
