<template>
  <nav class="nav">
    <PageLimiter>
      <div class="nav-container">
        <Text color="white">GameShop</Text>
        <div class="nav-options">
          <div class="nav-option-list">
            <Text color="white" weight="bold" size="small">Inicio</Text>
            <Text color="white" weight="bold" size="small">Juegos</Text>
          </div>
          <CircularHoverable>
            <SearchIcon />
          </CircularHoverable>
        </div>
      </div>
    </PageLimiter>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import Text from "@atoms/Text.vue";
import PageLimiter from "@atoms/PageLimiter.vue";
import SearchIcon from "../atoms/SearchIcon.vue";
import CircularHoverable from "../atoms/CircularHoverable.vue";

export default defineComponent({
  components: { PageLimiter, Text, SearchIcon, CircularHoverable }
});
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.nav {
  width: 100%;
  height: 56px;
  background-color: $dark-blue-light-b;

  &-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-options {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
    column-gap: 7em;
  }

  &-option-list {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    column-gap: 2em;
  }
}
</style>
