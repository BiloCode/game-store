import { computed, onMounted, ref } from "vue";

import IGame from "@interfaces/IGame";
import GetGameById from "@services/GetGameById";
import RequestState from "@localtypes/RequestState";

const useGetGame = () => {
  const game = ref<IGame>();
  const state = ref<RequestState>(RequestState.LOADING);

  const isSucess = computed(() => state.value === RequestState.SUCCESS);
  const isLoading = computed(() => state.value === RequestState.LOADING);

  onMounted(async () => {
    try {
      const gameData = await GetGameById.get("hm7oF1ZZMlEWC7nX1DU7");

      game.value = gameData;
      state.value = RequestState.SUCCESS;
    } catch (error) {
      console.log(error);
    }
  });

  return {
    game,
    isLoading,
    isSucess
  };
};

export default useGetGame;
