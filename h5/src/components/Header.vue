<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2021-01-05 16:57:17
 * @Description: file content
 * @FilePath: /h5/src/components/Header.vue
 * @powerd by hundun
-->
<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2020-12-31 17:42:50
 * @Description: file content
 * @FilePath: /h5/src/components/Header.vue
 * @powerd by hundun
-->
<template>
  <div class="header">活动h5编辑器</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 210;
  padding: 10px 30px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 76px;
  background: rgb(255 255 255);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
