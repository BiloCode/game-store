<template lang="">
  <p>
    <slot>Default Paragraph Text</slot>
  </p>
</template>

<style lang="scss" scoped>
p {
  --size: 16px;
  --line: calc(var(--size) * 1.4);

  margin: 0;
  font-weight: 300;
  font-size: var(--size);
  line-height: var(--line);
  color: var(--blue-light);
}
</style>
