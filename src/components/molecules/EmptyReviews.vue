<template>
  <div class="empty-review">
    <div>
      <Text weight="bold" color="white" size="normal">Sin reseñas</Text>
      <Text weight="regular" size="small" color="blue-light">
        Aun no existen reseñas en este videojuego
      </Text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Text from "@atoms/Text.vue";

export default defineComponent({
  components: { Text }
});
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.empty-review {
  width: 100%;
  height: 280px;
  background-color: $dark-blue-light;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  div {
    display: grid;
    justify-items: center;
    row-gap: 4px;
  }
}
</style>
