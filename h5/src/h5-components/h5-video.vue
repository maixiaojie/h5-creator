<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 17:38:54
 * @LastEditTime: 2021-01-05 16:33:11
 * @Description: file content
 * @FilePath: /h5/src/h5-components/h5-video.vue
 * @powerd by hundun
-->
<template>
  <div class="h5-video">
    <video
      ref="player"
      controls="controls"
      :muted="attrs.muted"
      :autoplay="attrs.autoplay"
      :poster="attrs.poster"
      :src="attrs.src"
      style="object-fit: fill; width: 100%; height: 100%"
      controlslist="nodownload"
      preload="auto"
      playsinline
      webkit-playsinline
      x5-video-player-type="h5"
    ></video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "H5Video",
  props: {
    attrs: {
      type: Object,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.h5-video {
  display: flex;
}
.h5-video video {
  width: 100%;
  outline: none;
}
</style>
