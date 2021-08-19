import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    user: null
  })
});

export default useUserStore;
