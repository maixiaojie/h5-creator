<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 17:38:54
 * @LastEditTime: 2021-01-04 11:02:56
 * @Description: file content
 * @FilePath: /h5/src/h5-components/h5-image.vue
 * @powerd by hundun
-->
<template>
  <div class="h5-image">
    <img :src="src" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "H5Image",
  props: {
    src: {
      type: String,
      default: "http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg",
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.h5-image {
  width: 100%;
}
.h5-image img {
  width: 100%;
  max-width: 100%;
  vertical-align: bottom;
}
</style>
