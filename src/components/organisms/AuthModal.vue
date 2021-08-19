<script lang="ts">
import { defineComponent, ref } from "vue";

import Portals from "@atoms/Portals.vue";
import DarkScreen from "@atoms/DarkScreen.vue";
import FormControl from "../molecules/FormControl.vue";
import Button from "../atoms/Button.vue";
import Text from "../atoms/Text.vue";

export default defineComponent({
  emits: ["close"],
  components: { Portals, DarkScreen, FormControl, Button, Text },
  setup(_, context) {
    const email = ref<string>("");
    const password = ref<string>("");

    const setEmail = (txt: string) => (email.value = txt);
    const setPassword = (txt: string) => (password.value = txt);

    const onClose = () => context.emit("close");
    const onSubmit = () => {
      console.log(email.value, password.value);
    };

    return {
      email,
      password,
      setPassword,
      setEmail,
      onSubmit,
      onClose
    };
  }
});
</script>

<template>
  <Portals>
    <DarkScreen>
      <div class="container">
        <div class="auth-modal">
          <header>
            <Text color="blue" weight="bold" size="small">
              Ingresa a nuestro Sistema
            </Text>
            <Text color="blue" size="e-small" weight="regular">
              Toda nuestra biblioteca de juegos disponible a tu alcanze
            </Text>
          </header>
          <form @submit.prevent="onSubmit">
            <fieldset class="controls">
              <FormControl
                type="email"
                :value="email"
                @input="setEmail"
                labelText="Correo Electronico"
              />
              <FormControl
                type="password"
                :value="password"
                @input="setPassword"
                labelText="Contraseña"
              />
            </fieldset>
            <div class="buttons">
              <Button color="green" text="Iniciar Sesión" />
              <Button
                color="red"
                type="button"
                @click="onClose"
                text="Cerrar Ventana"
              />
            </div>
          </form>
        </div>
      </div>
    </DarkScreen>
  </Portals>
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  width: 420px;
  border-radius: 10px;
  padding: calc(2em + 8px);
  box-sizing: border-box;
  background-color: #fff;
  display: grid;
  row-gap: 3.5em;

  header {
    display: grid;
    row-gap: 4px;
  }

  form {
    display: grid;
    row-gap: 2em;

    .controls {
      padding: 0;
      display: grid;
      row-gap: 1em;
      border: none;
    }

    .buttons {
      display: grid;
      row-gap: 4px;
    }
  }
}
</style>
