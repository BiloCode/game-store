<template>
  <div class="comment">
    <div class="comment-data">
      <CircularImage :source="information.user.image" />
      <div class="comment-text">
        <Text size="small" weight="bold">{{ information.user.username }}</Text>
        <Paragraph>{{ information.message }}</Paragraph>
      </div>
    </div>
    <Text weight="bold" color="blue" size="e-small">{{
      information.createdAt
    }}</Text>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Text from "@atoms/Text.vue";
import Paragraph from "@atoms/Paragraph.vue";
import GameComment from "@interfaces/IGameComment";
import CircularImage from "@atoms/CircularImage.vue";

export default defineComponent({
  components: { CircularImage, Text, Paragraph },
  props: {
    information: {
      type: Object as PropType<GameComment>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5em;
  box-sizing: border-box;
  border-bottom: 1px solid var(--dark-blue-light);

  &-data {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 1.5em;
  }

  &-text {
    display: grid;
    row-gap: 2px;
  }
}
</style>
