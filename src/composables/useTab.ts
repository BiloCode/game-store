import { ref } from "vue";

const useTab = () => {
  const tabList = ["Reseñas", "Imagenes"];

  const tabSelect = ref<number>(0);
  const tabChange = (value: number) => (tabSelect.value = value);

  return {
    tabList,
    tabChange,
    tabSelect
  };
};

export default useTab;
