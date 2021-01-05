<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2021-01-05 10:19:56
 * @Description: file content
 * @FilePath: /h5/src/components/components.vue
 * @powerd by hundun
-->
<template>
  <div class="components">
    <div
      class="component-item"
      @dragstart="drag(component, $event)"
      draggable="true"
      v-for="component in components"
    >
      {{ component.label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Components",
  components: {},
  props: {
    msg: String,
  },
  setup: () => {
    const components = ref([
      {
        name: "image",
        label: "图片",
      },
      {
        name: "image",
        label: "轮播图",
      },
      {
        name: "video",
        label: "视频",
      },
      {
        name: "b-button",
        label: "驻底按钮",
      },
    ]);
    const drag = (component: any, e: any) => {
      const data = {
        type: "add-component",
        data: component.name,
      };
      e.dataTransfer.setData("text", JSON.stringify(data));
    };
    return {
      components,
      drag,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.components {
  position: fixed;
  top: 76px;
  left: 0;
  z-index: 200;
  padding: 10px 20px;
  width: 120px;
  height: calc(100vh - 76px);
  overflow-y: scroll;
  box-sizing: border-box;
  background: rgb(255 255 255);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  user-select: none;
}
.component-item {
  width: 80px;
  height: 80px;
  border: 1px solid #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
