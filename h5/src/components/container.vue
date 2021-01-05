<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2021-01-05 15:47:06
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
          <component :is="`h5-${page.name}`"></component>
        </ComponentWrapper>
      </template>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentWrapper from "./component-wrapper.vue";
import H5Image from "../h5-components/h5-image.vue";
import H5Video from "../h5-components/h5-video.vue";
import { useComponentHooks, useContainerHooks } from "./hooks/container";
export default defineComponent({
  name: "container",
  props: {
    msg: String,
  },
  components: {
    ComponentWrapper,
    H5Image,
    H5Video,
  },
  setup: () => {
    const {
      pages,
      handleDrop,
      handleDragLeave,
      handleDragOver,
      handleDragEnter,
    } = useContainerHooks();
    const {
      oldIndex,
      activeIndex,
      handleCompClick,
      handleCompDel,
      handleCompMoveUp,
      handleCompMoveDown,
      handleCompDragStart,
      handleCompDragEnter,
      handleCompDragEnd,
    } = useComponentHooks();

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
