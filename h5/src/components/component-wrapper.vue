<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-04 10:25:21
 * @LastEditTime: 2021-01-05 11:32:21
 * @Description: file content
 * @FilePath: /h5/src/components/component-wrapper.vue
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
    <i
      class="operate del el-icon-delete"
      title="删除"
      @click.stop="handleDel"
    ></i>
    <i
      class="operate up el-icon-upload2"
      title="上移"
      @click.stop="handleMoveUp"
    ></i>
    <i
      class="operate down el-icon-download"
      title="下移"
      @click.stop="handleMoveDown"
    ></i>
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
    const HandleClick = () => emit("on-click", props.index, props.info);
    const handleDel = () => emit("on-del", props.index, props.info);
    const handleMoveUp = () => emit("on-moveup", props.index, props.info);
    const handleMoveDown = () => emit("on-movedown", props.index, props.info);

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
      handleMoveUp,
      handleMoveDown,
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
.component-wrapper:hover i.operate {
  display: flex;
}
.component-wrapper.active {
  opacity: 0.2;
  outline: 1px solid #db2727;
}
.component-wrapper i.operate {
  position: absolute;
  cursor: pointer;
  top: 0;
  background: rgba(255, 255, 255, 0.8);
  width: 16px;
  height: 16px;
  font-size: 16px;
  display: none;
  padding: 4px;
}
.del {
  right: 0;
}
.up {
  right: 24px;
}
.down {
  right: 48px;
}
</style>
