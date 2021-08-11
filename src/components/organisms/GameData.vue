<template>
  <aside>
    <div class="game-data">
      <figure class="game-img">
        <Image cover :source="image" alt="store-game" />
      </figure>
      <div class="game-title">
        <Text>{{ title }}</Text>
        <Text color="blue-light" weight="regular" size="e-small"
          >Creado el 23 de octubre del 1996</Text
        >
      </div>
      <section class="game-categories">
        <Category v-for="(value, index) in genders" :key="index">
          {{ value }}
        </Category>
      </section>
      <div class="game-price">
        <Text color="white" size="big">{{ formatPrice() }}</Text>
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
  row-gap: 4em;
  position: sticky;
  top: 0;

  .game {
    &-img {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 360px;
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

    &-categories {
      display: flex;
      flex-wrap: wrap;

      & > * {
        margin-right: 8px;
        margin-bottom: 8px;
      }
    }

    &-title {
      display: grid;
      row-gap: 4px;
    }

    &-price {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
