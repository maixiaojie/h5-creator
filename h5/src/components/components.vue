<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2021-01-05 16:04:38
 * @Description: file content
 * @FilePath: /h5/src/components/components.vue
 * @powerd by hundun
-->
<template>
  <div class="components">
    <div
      class="component-item"
      @dragstart="handleDrag(component, $event)"
      draggable="true"
      @dblclick="handleDbClick(component, $event)"
      v-for="component in components"
    >
      {{ component.label }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Components",
  components: {},
  setup: () => {
    const store = useStore();
    const handleDrag = (component: any, e: any) => {
      const data = {
        type: "add-component",
        data: component.name,
      };
      e.dataTransfer.setData("text", JSON.stringify(data));
    };
    const handleDbClick = (component: any) => {
      store.commit("addNewComponent", { name: component.name });
    };
    return {
      components: computed(() => store.state.components),
      handleDrag,
      handleDbClick,
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
