<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2021-01-06 11:39:35
 * @Description: 属性编辑器
 * @FilePath: /h5/src/components/attrs.vue
 * @powerd by hundun
-->
<template>
  <div class="attrs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="组件配置" name="attrsConfig"
        ><AttrsComponent></AttrsComponent
      ></el-tab-pane>
      <el-tab-pane label="页面配置" name="pageConfig">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import AttrsComponent from "./attrs-component.vue";
export default defineComponent({
  name: "Attrs",
  components: {
    AttrsComponent,
  },
  setup: () => {
    const store = useStore();
    // const tabNames = ref(["attrsConfig", "pageConfig"]);
    const activeTabName = ref("attrsConfig");
    const handleClick = () => {};
    return {
      activeTabName,
      handleClick,
      components: computed(() => store.state.components),
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.attrs {
  position: fixed;
  top: 76px;
  right: 0;
  z-index: 200;
  padding: 10px 20px;
  width: 400px;
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
