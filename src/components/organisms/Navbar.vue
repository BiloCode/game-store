<script lang="ts">
import { defineComponent } from "vue";

import Text from "@atoms/Text.vue";
import Button from "@atoms/Button.vue";
import SearchIcon from "@atoms/SearchIcon.vue";
import PageLimiter from "@atoms/PageLimiter.vue";
import AuthModal from "@organisms/AuthModal.vue";
import CircularHoverable from "@atoms/CircularHoverable.vue";

import useAuthModal from "@store/useAuthModal";

export default defineComponent({
  components: {
    PageLimiter,
    Text,
    SearchIcon,
    CircularHoverable,
    Button,
    AuthModal
  },
  setup() {
    const authModal = useAuthModal();

    return {
      active: authModal.active,
      closeModal: authModal.closeModal,
      openModal: authModal.openModal
    };
  }
});
</script>

<template>
  <AuthModal v-if="active" @close="closeModal" />
  <nav class="nav">
    <PageLimiter>
      <div class="nav-container">
        <Text color="white">GameShop</Text>
        <div class="nav-option-list">
          <Text color="white" weight="bold" size="small">Inicio</Text>
          <Text color="white" weight="bold" size="small">Juegos</Text>
        </div>
        <div class="nav-actions">
          <CircularHoverable>
            <SearchIcon />
          </CircularHoverable>
          <div class="nav-buttons">
            <Button
              small
              color="green"
              @click="openModal"
              text="Ingresa Ahora"
            />
            <Button text="Registrate" @click="openModal" />
          </div>
        </div>
      </div>
    </PageLimiter>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../styles/variables";

.nav {
  width: 100%;
  height: $navbar-height;
  background-color: $dark-blue-light-b;

  &-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-actions {
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

  &-buttons {
    display: grid;
    grid-template-columns: repeat(2, 160px);
    column-gap: 12px;
    align-items: center;
  }
}
</style>
