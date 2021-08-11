<template>
  <div class="spinner">
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/variables";

.spinner {
  width: 64px;
  height: 64px;
  position: relative;

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    border: 8px solid transparent;
    border-top-color: $green;
    border-bottom-color: $green;
    animation: ScaleInRotate 1.2s infinite;
    box-sizing: border-box;
  }
}

@keyframes ScaleInRotate {
  0% {
    border-width: 10px;
    opacity: 1;
    transform: rotate(0turn);
  }
  50% {
    border-width: 2px;
    opacity: 0.5;
    transform: rotate(0.5turn);
  }
  100% {
    border-width: 8px;
    opacity: 1;
    transform: rotate(1turn);
  }
}
</style>
