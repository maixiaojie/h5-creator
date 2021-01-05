/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-05 11:51:17
 * @LastEditTime: 2021-01-05 12:50:33
 * @Description: file content
 * @FilePath: /h5/src/components/hooks/container.ts
 * @powerd by hundun
 */
import { ref } from "vue";
import { guid } from "../../utils/index";
export const useContainerHooks = () => {
  const pages: any = ref([]);
  const addNewComp = (data: any) => {
    pages.value.push({
      uid: guid(),
      type: data,
      name: `${data}`
    });
  };
  const handleDrop = (e: any) => {
    const text = e.dataTransfer.getData("text");
    const { type, data } = JSON.parse(text);
    if (type === "add-component") {
      addNewComp(data);
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
    pages,
    handleDrop,
    handleDragLeave,
    handleDragOver,
    handleDragEnter
  };
};

export const useComponentHooks = (pages: any) => {
  const oldIndex = ref(0);
  const newIndex = ref(0);
  const activeIndex = ref(-1);
  const handleCompClick = (i: number, comp: any) => {
    console.log(i, comp);
  };
  const handleCompDel = (i: number, comp: any) => {
    pages.value.splice(i, 1);
  };
  // 交换两个组件的位置
  const swagComp = (oldIndex: number, newIndex: number) => {
    if (oldIndex !== newIndex) {
      const newPages = [...pages.value];
      newPages.splice(oldIndex, 1);
      newPages.splice(newIndex, 0, pages.value[oldIndex]);
      pages.value = [...newPages];
    }
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
