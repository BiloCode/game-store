<template>
  <aside>
    <div class="game-data">
      <figure class="game-img">
        <Image cover :source="image" alt="store-game" />
      </figure>
      <div class="game-information">
        <Text size="">{{ title }}</Text>
        <section>
          <Category v-for="(value, index) in genders" :key="index">
            {{ value }}
          </Category>
        </section>
      </div>
      <div class="game-price">
        <Text size="big">{{ formatPrice() }}</Text>
      </div>
    </div>
    <div class="game-btn-container">
      <Button text="Comprar Ahora" green />
      <Button text="Agregar al Carrito" />
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Text from "@atoms/Text.vue";
import Image from "@atoms/Image.vue";
import Button from "@atoms/Button.vue";
import Category from "@atoms/Category.vue";

export default defineComponent({
  components: { Button, Image, Category, Text },
  props: {
    title: String,
    price: Number,
    image: String,
    genders: {
      type: Array as PropType<string[]>,
      default: () => []
    }
  },
  setup(props) {
    const formatPrice = () => `S/ ${props.price!.toFixed(2)}`;

    return {
      formatPrice
    };
  }
});
</script>

<style lang="scss" scoped>
aside {
  width: 100%;
  display: grid;
  row-gap: 80px;
  user-select: none;

  .game {
    &-img {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 400px;
      border-radius: 10px;
    }

    &-data {
      display: grid;
      row-gap: 1.5em;
    }

    &-btn-container {
      display: grid;
      row-gap: 10px;
    }

    &-information {
      display: grid;
      row-gap: 16px;

      section {
        display: flex;
        flex-wrap: wrap;

        & > * {
          margin-right: 8px;
          margin-bottom: 8px;
        }
      }
    }

    &-price {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
