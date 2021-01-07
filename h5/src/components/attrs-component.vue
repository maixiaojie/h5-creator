<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2021-01-06 17:11:25
 * @Description: 组件属性
 * @FilePath: /h5/src/components/attrs-component.vue
 * @powerd by hundun
-->
<template>
  <div class="attrs-component" v-if="activeComponent">
    <el-divider content-position="left">通用样式</el-divider>
    <AttrsConfigCommon
      :attrs="activeComponent.common_style"
    ></AttrsConfigCommon>
    <el-divider content-position="left">组件属性</el-divider>
    <el-divider content-position="left">自定义样式</el-divider>
    <AttrsConfigCSS></AttrsConfigCSS>
  </div>
  <div v-else>
    <el-alert title="你还未选择组件" type="info" show-icon> </el-alert>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import AttrsConfigCommon from "./attrs-config/common.vue";
import AttrsConfigCSS from "./attrs-config/css.vue";
export default defineComponent({
  name: "AttrsComponent",
  components: {
    AttrsConfigCommon,
    AttrsConfigCSS,
  },
  setup: () => {
    const store = useStore();
    return {
      activeComponent: computed(() => store.getters.activeComponent),
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
