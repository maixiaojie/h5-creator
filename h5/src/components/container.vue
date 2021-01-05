<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2021-01-05 11:38:40
 * @Description: file content
 * @FilePath: /h5/src/components/container.vue
 * @powerd by hundun
-->
<template>
  <div
    class="main"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
    @dragenter="handleDragEnter"
    @drop="handleDrop"
  >
    <transition-group name="flip-list">
      <template v-for="(page, index) in pages" :key="page.uid">
        <ComponentWrapper
          :index="index"
          :info="page"
          :class="{ active: index === activeIndex && oldIndex === index }"
          @on-click="handleCompClick"
          @on-del="handleCompDel"
          @on-moveup="handleCompMoveUp"
          @on-movedown="handleCompMoveDown"
          @on-dragstart="handleCompDragStart"
          @on-dragenter="handleCompDragEnter"
          @on-dragend="handleCompDragEnd"
        >
          <component :is="`h5-${page.type}`"></component>
        </ComponentWrapper>
      </template>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { guid } from "../utils/index";
import ComponentWrapper from "./component-wrapper.vue";
import H5Image from "../h5-components/h5-image.vue";
export default defineComponent({
  name: "container",
  props: {
    msg: String,
  },
  components: {
    ComponentWrapper,
    H5Image,
  },
  setup: () => {
    const pages: any = ref([]);
    const handleDrop = (e: any) => {
      const text = e.dataTransfer.getData("text");
      const { type, data } = JSON.parse(text);
      if (type === "add-component") {
        pages.value.push({
          uid: guid(),
          type: data,
          name: `${data}`,
        });
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
    const handleCompClick = (i: number, comp: any) => {
      console.log(i, comp);
    };
    const handleCompDel = (i: number, comp: any) => {
      pages.value.splice(i, 1);
    };
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
    const oldIndex = ref(0);
    const newIndex = ref(0);
    const activeIndex = ref(-1);
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
      handleDrop,
      handleDragOver,
      handleDragEnter,
      handleDragLeave,
      pages,
      activeIndex,
      oldIndex,
      handleCompClick,
      handleCompDel,
      handleCompMoveDown,
      handleCompMoveUp,
      handleCompDragStart,
      handleCompDragEnter,
      handleCompDragEnd,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 375px;
  min-height: 700px;
  background: #fff;
  margin: 0 auto;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
}
.flip-list-move {
  transition: transform 0.3s ease-in;
}
</style>
