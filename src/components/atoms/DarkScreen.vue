<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/variables";

div {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $black-smooth;
  z-index: 1;
}
</style>
