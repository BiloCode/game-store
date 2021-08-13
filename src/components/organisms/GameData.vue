<script lang="ts">
import { defineComponent, PropType } from "vue";

import Text from "@atoms/Text.vue";
import Image from "@atoms/Image.vue";
import Button from "@atoms/Button.vue";
import Category from "@atoms/Category.vue";
import GamePrice from "../molecules/GamePrice.vue";

export default defineComponent({
  components: { Button, Image, Category, Text, GamePrice },
  emits: ["click-buy", "click-favorite"],
  props: {
    title: String,
    price: {
      type: Number,
      required: true
    },
    discount: {
      type: Number,
      required: true
    },
    image: String,
    genders: {
      type: Array as PropType<string[]>,
      default: () => []
    }
  },
  setup(props, context) {
    const buyEmit = () => context.emit("click-buy");
    const favoriteEmit = () => context.emit("click-favorite");

    return {
      buyEmit,
      favoriteEmit
    };
  }
});
</script>

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
      <GamePrice :price="price" :discount="discount" />
    </div>
    <div class="game-btn-container">
      <Button color="green" text="Comprar Ahora" @click="buyEmit" />
      <Button text="Agregar a favoritos" @click="favoriteEmit" />
    </div>
  </aside>
</template>

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
  }
}
</style>
