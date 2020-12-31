<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2020-12-31 17:54:02
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
    <template v-for="page in pages">
      <component :is="`h5-${page.type}`"></component>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import H5Image from "../h5-components/h5-image.vue";
export default defineComponent({
  name: "container",
  props: {
    msg: String,
  },
  components: {
    H5Image,
  },
  setup: () => {
    const pages: any = ref([]);
    const handleDrop = (e: any) => {
      const type = e.dataTransfer.getData("text");
      pages.value.push({
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
    return {
      handleDrop,
      handleDragOver,
      handleDragEnter,
      handleDragLeave,
      pages,
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
