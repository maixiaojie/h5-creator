<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2020-12-31 16:29:37
 * @Description: file content
 * @FilePath: /h5/src/components/container.vue
 * @powerd by hundun
-->
<template>
  <div class="main" @drag="handleDrag" @dragover="handleDragOver"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "container",
  props: {
    msg: String,
  },
  setup: () => {
    const handleDrag = (e: Event) => {
      console.log(e);
      e.preventDefault();
    };
    const handleDragOver = (e: Event) => {
      console.log("handleDragOver");
      console.log(e);
    };
    return {
      handleDrag,
      handleDragOver,
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
