<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2021-01-05 17:48:07
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
  <div class="header">h5在线编辑器(h5-online-creator)</div>
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
