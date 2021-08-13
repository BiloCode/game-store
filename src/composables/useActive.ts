import { ref } from "vue";

const useActive = () => {
  const active = ref<boolean>(false);
  const setActive = (value: boolean) => (active.value = value);

  return {
    active,
    setActive
  };
};

export default useActive;
