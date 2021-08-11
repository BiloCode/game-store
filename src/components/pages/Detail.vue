<template>
  <div class="main-container">
    <div class="spinner-container" v-if="isLoading">
      <Spinner />
    </div>
    <PageLimiter>
      <div v-if="game && isSucess" class="page-container">
        <GameData
          :title="game.title"
          :price="game.price"
          :genders="game.categories"
          :image="game.bannerImage"
        />
        <GameInformation
          :stars="game.stars"
          :description="game.description"
          :comments="game.comments"
          :captures="game.gameCaptures"
        />
      </div>
    </PageLimiter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Spinner from "@atoms/Spinner.vue";
import GameData from "@organisms/GameData.vue";
import useGetGame from "@composables/useGetGame";
import PageLimiter from "@atoms/PageLimiter.vue";
import GameInformation from "@organisms/GameInformation.vue";

export default defineComponent({
  components: {
    GameData,
    GameInformation,
    PageLimiter,
    Spinner
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
@import "../../styles/variables";

.main-container {
  min-height: 100vh;
  background-color: $dark-blue;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em 0;
  box-sizing: border-box;
}

.page-container {
  padding: 4em 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 296px 1fr;
  align-items: start;
  column-gap: 6em;
}
</style>
