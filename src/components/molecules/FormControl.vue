<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";

type TInput = "text" | "email" | "number";

export default defineComponent({
  emits: ["input"],
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    labelText: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    type: {
      type: String as PropType<TInput>,
      default: "text"
    }
  },
  setup(props, context) {
    const rValue = ref(props.value);

    watch(rValue, newValue => context.emit("input", newValue));

    return {
      rValue
    };
  }
});
</script>

<template>
  <div>
    <label>{{ labelText }}</label>
    <input
      :type="type"
      :value="rValue"
      v-model="rValue"
      :placeholder="placeholder"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/variables";

div {
  display: grid;
  row-gap: 12px;

  label {
    font-weight: 400;
    color: $blue;
    font-size: 14px;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0 8px;
    border: 1px solid $blue-light-max;
  }
}
</style>
