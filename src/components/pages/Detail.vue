<template>
  <main class="main-container">
    <div v-if="isLoading">
      <span style="color:#fff">Loading ...</span>
    </div>
    <div v-if="game && isSucess" class="page-container">
      <GameData
        :title="game.title"
        :price="game.price"
        :genders="game.categories"
        :image="game.bannerImage"
      />
      <GameInformation
        :title="game.title"
        :stars="game.stars"
        :description="game.description"
        :comments="game.comments"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import GameData from "@organisms/GameData.vue";
import useGetGame from "@composables/useGetGame";
import GameInformation from "@organisms/GameInformation.vue";

export default defineComponent({
  components: {
    GameData,
    GameInformation
  },
  setup() {
    const { game, isSucess, isLoading } = useGetGame();

    return {
      game,
      isSucess,
      isLoading
    };
  }
});
</script>

<style lang="scss" scoped>
.main-container {
  min-height: 100vh;
  background-color: var(--dark-blue);
}

.page-container {
  width: 80%;
  margin: 0 auto;
  padding: 4em 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 348px 1fr;
  align-items: start;
  column-gap: 5em;
}
</style>
