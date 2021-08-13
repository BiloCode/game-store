<script lang="ts">
import { defineComponent, PropType } from "vue";

import Text from "@atoms/Text.vue";
import Image from "@atoms/Image.vue";
import Button from "@atoms/Button.vue";
import DarkScreen from "@atoms/DarkScreen.vue";
import discountApply from "@utils/discountApply";
import ItemPayment from "@molecules/ItemPayment.vue";

export default defineComponent({
  components: { DarkScreen, Text, Image, Button, ItemPayment },
  emits: ["close-modal"],
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    discount: {
      type: Number,
      required: true
    },
    categories: {
      type: Array as PropType<string[]>,
      default: () => []
    }
  },
  setup(props, context) {
    const discountFormat = props.discount * 100 + "%";
    const priceFormat = props.price.toFixed(2) + " PEN";
    const priceDiscount = discountApply(props.price, props.discount) + " PEN";

    const closeModalEmit = () => context.emit("close-modal");

    return {
      closeModalEmit,
      priceDiscount,
      priceFormat,
      discountFormat
    };
  }
});
</script>

<template>
  <DarkScreen>
    <div class="container">
      <div class="modal">
        <header>
          <Text size="small">Comprar {{ title }}</Text>
        </header>
        <section>
          <div class="buy-information">
            <figure class="game-image">
              <Image :source="image" />
            </figure>
            <div class="game-payment">
              <div>
                <ItemPayment title="Precio del Juego" :amount="priceFormat" />
                <ItemPayment
                  title="Porcentaje de Descuento"
                  :amount="discountFormat"
                />
              </div>
              <ItemPayment
                bottomBorder
                title="Precio Total"
                :amount="priceDiscount"
              />
            </div>
          </div>
          <div class="game-categories">
            <Text
              size="e-small"
              weight="regular"
              color="blue-light"
              v-for="(category, key) in categories"
              :key="key"
            >
              {{ category }}
            </Text>
          </div>
          <div class="buttons-container">
            <div class="buttons">
              <Button color="green" small text="Realizar el Pago" />
              <Button
                color="red"
                small
                text="Cancelar Operacion"
                @click="closeModalEmit"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </DarkScreen>
</template>

<style lang="scss" scoped>
@import "../../styles/variables";

$image-row-size: 160px;

.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    width: 720px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;

    header {
      background-color: $dark-blue;
      padding: 1.5em 3em;
      box-sizing: border-box;
    }

    section {
      padding: 2em 3em;
      box-sizing: border-box;
      display: grid;
      row-gap: 1em;
    }

    .buy-information {
      display: grid;
      grid-template-columns: $image-row-size 1fr;
      column-gap: 2.5em;
    }

    .game-payment {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .buttons-container {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      .buttons {
        display: grid;
        grid-template-columns: repeat(2, 180px);
        column-gap: 8px;
      }
    }

    .game-image {
      margin: 0;
      width: 100%;
      border-radius: 10px;
      line-height: 0;
    }

    .game-categories {
      width: $image-row-size;
      display: flex;
      flex-wrap: wrap;

      & > * {
        margin-right: 8px;
        margin-bottom: 4px;
      }
    }
  }
}
</style>
