<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2021-01-04 11:53:56
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
    <template v-for="(page, index) in pages">
      <ComponentWrapper
        :index="index"
        :info="page"
        @on-click="handleCompClick"
        @on-del="handleCompDel"
      >
        <component :is="`h5-${page.type}`"></component>
      </ComponentWrapper>
    </template>
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
      const type = e.dataTransfer.getData("text");
      pages.value.push({
        uid: guid(),
        type,
        name: `${type}`,
      });
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
      console.log(i, comp);
      console.log(pages.value)
    };
    return {
      handleDrop,
      handleDragOver,
      handleDragEnter,
      handleDragLeave,
      pages,
      handleCompClick,
      handleCompDel,
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
</style>
