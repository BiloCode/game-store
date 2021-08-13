<script lang="ts">
import { defineComponent } from "vue";

import Portals from "@atoms/Portals.vue";
import Spinner from "@atoms/Spinner.vue";
import GameData from "@organisms/GameData.vue";
import useActive from "@composables/useActive";
import useGetGame from "@composables/useGetGame";
import PageLimiter from "@atoms/PageLimiter.vue";
import GameInformation from "@organisms/GameInformation.vue";
import BuyGameModal from "@organisms/BuyGameModal.vue";

export default defineComponent({
  components: {
    GameData,
    GameInformation,
    PageLimiter,
    Spinner,
    BuyGameModal,
    Portals
  },
  setup() {
    const { active, setActive } = useActive();
    const { game, isSucess, isLoading } = useGetGame();

    return {
      game,
      isSucess,
      isLoading,
      active,
      setActive
    };
  }
});
</script>

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
          :discount="game.discount"
          :genders="game.categories"
          :image="game.bannerImage"
          @click-buy="setActive(true)"
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
  <Portals v-if="active && isSucess && game">
    <BuyGameModal
      :id="game.id"
      :image="game.bannerImage"
      :categories="game.categories"
      :title="game.title"
      :price="game.price"
      :discount="game.discount"
      @close-modal="setActive(false)"
    />
  </Portals>
</template>

<style lang="scss" scoped>
@import "../../styles/variables";

.main-container {
  min-height: calc(100vh - 56px);
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
