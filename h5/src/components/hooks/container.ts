/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-05 11:51:17
 * @LastEditTime: 2021-01-06 18:53:18
 * @Description: file content
 * @FilePath: /h5/src/components/hooks/container.ts
 * @powerd by hundun
 */
import { ref, computed } from "vue";
import { useStore } from "vuex";
export const useContainerHooks = () => {
  const store = useStore();
  const handleDrop = (e: any) => {
    const text = e.dataTransfer.getData("text");
    const { type, data } = JSON.parse(text);

    if (type === "add-component") {
      store.commit("addNewComponent", { name: data });
    }
  };
  const handleDragLeave = (e: any) => {
    e.preventDefault();
  };
  const handleDragOver = (e: any) => {
    e.preventDefault();
  };
  const handleDragEnter = (e: any) => {
    e.preventDefault();
  };
  return {
    pages: computed(() => store.state.page_info.components),
    handleDrop,
    handleDragLeave,
    handleDragOver,
    handleDragEnter
  };
};

export const useComponentHooks = () => {
  const store = useStore();
  const pages = computed(() => store.state.page_info.components);
  const oldIndex = ref(0);
  const newIndex = ref(0);
  const activeIndex = ref(-1);
  const handleCompClick = (i: number, comp: any) => {
    console.log(comp);
    store.dispatch("updateActiveComponent", { index: i, comp });
  };
  const handleCompDel = (i: number, comp: any) => {
    store.commit("delComponent", { index: i, comp });
  };
  // 交换两个组件的位置
  const swagComp = (oldIndex: number, newIndex: number) => {
    store.commit("swapComponent", { oldIndex, newIndex });
  };
  const handleCompMoveUp = (i: number, comp: any) => {
    if (i - 1 > -1) {
      swagComp(i, i - 1);
    }
  };
  const handleCompMoveDown = (i: number, comp: any) => {
    if (i + 1 < pages.value.length) {
      swagComp(i, i + 1);
    }
  };
  const handleCompDragStart = (e: any, i: number) => {
    oldIndex.value = i;
    activeIndex.value = i;
  };
  const handleCompDragEnter = (e: any, i: number) => {
    newIndex.value = i;
  };
  const handleCompDragEnd = (e: any, i: number) => {
    swagComp(oldIndex.value, newIndex.value);
    activeIndex.value = -1;
  };
  return {
    activeComponentUid: computed(
      () => store.state.workspace.activeComponentUid
    ),
    oldIndex,
    newIndex,
    activeIndex,
    handleCompClick,
    handleCompDel,
    handleCompMoveUp,
    handleCompMoveDown,
    handleCompDragStart,
    handleCompDragEnter,
    handleCompDragEnd
  };
};
