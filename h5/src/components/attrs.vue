<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2021-01-05 17:39:17
 * @Description: 属性编辑器
 * @FilePath: /h5/src/components/attrs.vue
 * @powerd by hundun
-->
<template>
  <div class="attrs"></div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Attrs",
  components: {},
  setup: () => {
    const store = useStore();
    return {
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
