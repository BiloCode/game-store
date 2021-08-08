<template>
  <div class="game-information">
    <header>
      <div>
        <Text>{{ title }}</Text>
        <Paragraph>{{ description }}</Paragraph>
      </div>
      <StarList :amount="stars" />
    </header>
    <section>
      <div class="tab-container">
        <Tab
          v-for="(tab, key) in tabList"
          :key="key"
          :text="tab"
          :active="key === tabSelect"
          @click="tabChange(key)"
        />
      </div>
      <CommentList v-if="tabSelect === 1" :comments="comments" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import useTab from "@composables/useTab";
import IGameComment from "@interfaces/IGameComment";

import Tab from "@atoms/Tab.vue";
import Text from "@atoms/Text.vue";
import Paragraph from "@atoms/Paragraph.vue";
import StarList from "@molecules/StarList.vue";
import CommentList from "@molecules/CommentList.vue";

export default defineComponent({
  components: { Text, StarList, Paragraph, Tab, CommentList },
  props: {
    title: String,
    description: String,
    stars: {
      type: Number,
      required: true
    },
    comments: {
      type: Array as PropType<IGameComment[]>,
      default: () => []
    }
  },
  setup() {
    const { tabSelect, tabList, tabChange } = useTab(1);

    return {
      tabList,
      tabSelect,
      tabChange
    };
  }
});
</script>

<style lang="scss" scoped>
.game {
  &-information {
    display: grid;
    row-gap: 5em;
  }
}

header {
  display: grid;
  row-gap: 1.5em;

  div {
    display: grid;
    row-gap: 8px;
  }
}

section {
  display: grid;
  row-gap: 2em;

  .tab-container {
    display: grid;
    grid-template-columns: repeat(2, 168px);
  }
}
</style>
