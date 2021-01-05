<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 17:38:54
 * @LastEditTime: 2021-01-05 14:38:28
 * @Description: file content
 * @FilePath: /h5/src/h5-components/h5-video.vue
 * @powerd by hundun
-->
<template>
  <div class="h5-video" :style="{ backgroundColor: data.bgColor }">
    <video
      ref="player"
      controls="controls"
      :muted="data.muted"
      :autoplay="data.autoplay"
      :poster="data.poster"
      :src="data.src"
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
    data: {
      type: Object,
      default: () => {
        return {
          bgColor: "",
          muted: false,
          autoplay: false,
          poster: "http://h5.dooring.cn/uploads/1_1740c6fbcd9.png",
          src:
            "https://gossv.vcg.com/cmsUploadVideo/creative/1%E7%A7%BB%E8%BD%B4/7%E6%9C%88%E7%A7%BB%E8%BD%B4.mp4",
        };
      },
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
