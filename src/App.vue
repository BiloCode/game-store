<template>
  <main>
    <Navbar />
    <Detail />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Detail from "@pages/Detail.vue";
import Navbar from "@organisms/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Detail,
    Navbar
  }
});
</script>
