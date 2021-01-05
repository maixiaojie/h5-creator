<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-04 10:25:21
 * @LastEditTime: 2021-01-05 11:03:55
 * @Description: file content
 * @FilePath: /h5/src/components/component-wrapper.vue
 * @powerd by hundun
-->
<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2020-12-31 17:37:54
 * @Description: file content
 * @FilePath: /h5/src/components/components.vue
 * @powerd by hundun
-->
<template>
  <div
    class="component-wrapper"
    @dragstart="HandleDrag"
    @dragenter="HandleDragEnter"
    @dragend="HandleDragEnd"
    draggable="true"
    @click="HandleClick"
  >
    <slot></slot>
    <span class="del" @click.stop="handleDel">×</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentWrapper",
  props: {
    index: {
      type: Number,
      default: -1,
    },
    info: Object,
  },
  setup: (props, { emit }) => {
    const HandleClick = () => {
      emit("on-click", props.index, props.info);
    };
    const handleDel = () => {
      emit("on-del", props.index, props.info);
    };
    const HandleDrag = (e: any) => {
      const data = {
        type: "move-component",
        data: props.index,
      };
      e.dataTransfer.setData("text", JSON.stringify(data));
      emit("on-dragstart", e, props.index);
    };
    const HandleDragEnter = (e: any) => {
      emit("on-dragenter", e, props.index);
    };
    const HandleDragEnd = (e: any) => {
      emit("on-dragend", e, props.index);
    };

    return {
      HandleDrag,
      HandleDragEnter,
      HandleDragEnd,
      HandleClick,
      handleDel,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.component-wrapper {
  cursor: move;
  margin: 0 auto;
  position: relative;
}
.component-wrapper:hover {
  outline: 1px solid #fdcd00;
}
.component-wrapper:hover span.del {
  display: flex;
}
.component-wrapper.active {
  opacity: 0.2;
  outline: 1px solid #db2727;
}
.component-wrapper span.del {
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  width: 18px;
  height: 18px;
  display: none;
  align-items: center;
  justify-content: center;
}
</style>
