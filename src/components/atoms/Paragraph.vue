<template lang="">
  <p>
    <slot>Default Paragraph Text</slot>
  </p>
</template>

<style lang="scss" scoped>
@import "../../styles/variables";

$default-size: 16px;

p {
  margin: 0;
  font-weight: 300;
  font-size: $default-size;
  line-height: $default-size * $line-multiplier;
  color: $blue-light;
}
</style>
