import { ref } from "vue";

const useTab = (tab: number) => {
  const tabList = ["Imagenes", "Reseñas"];

  const tabSelect = ref<number>(tab);
  const tabChange = (value: number) => (tabSelect.value = value);

  return {
    tabList,
    tabChange,
    tabSelect
  };
};

export default useTab;
