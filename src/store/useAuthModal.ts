import { defineStore } from "pinia";

const useAuthModal = defineStore("auth-modal", {
  state: () => ({ active: false }),
  actions: {
    openModal() {
      this.active = true;
    },
    closeModal() {
      this.active = false;
    }
  }
});

export default useAuthModal;
