<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-06 11:11:00
 * @LastEditTime: 2021-01-08 15:09:57
 * @Description: file content
 * @FilePath: /h5/src/components/attrs-config/common.vue
 * @powerd by hundun
-->
<template>
  <div class="">
    <el-form ref="formRef" :model="form" label-width="100">
      <el-form-item label="外边距（上）">
        <el-input-number
          v-model="form.margin_top"
          :min="0"
          :max="100"
          @change="handleChange"
          label="外边距（上）"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="外边距（下）">
        <el-input-number
          v-model="form.margin_bottom"
          :min="0"
          :max="100"
          @change="handleChange"
          label="外边距（下）"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="外边距（左）">
        <el-input-number
          v-model="form.margin_left"
          :min="0"
          :max="100"
          @change="handleChange"
          label="外边距（左）"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="外边距（右）">
        <el-input-number
          v-model="form.margin_right"
          :min="0"
          :max="100"
          @change="handleChange"
          label="外边距（右）"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="内边距（上）">
        <el-input-number
          v-model="form.padding_top"
          :min="0"
          :max="100"
          @change="handleChange"
          label="内边距（上）"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="内边距（下）">
        <el-input-number
          v-model="form.padding_bottom"
          :min="0"
          :max="100"
          @change="handleChange"
          label="内边距（下）"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="内边距（左）">
        <el-input-number
          v-model="form.padding_left"
          :min="0"
          :max="100"
          @change="handleChange"
          label="内边距（左）"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="内边距（右）">
        <el-input-number
          v-model="form.padding_right"
          :min="0"
          :max="100"
          @change="handleChange"
          label="内边距（右）"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="背景颜色">
        <el-color-picker
          v-model="form.background_color"
          show-alpha
          @change="handleChange"
          :predefine="predefineColors"
        >
        </el-color-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, reactive, toRefs, watch } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "AttrsConfigCommon",
  components: {},
  props: {
    attrs: Object,
  },
  setup: (props) => {
    const store = useStore();
    const formRef = ref(null);
    const predefineColors = ref([
      "#ff4500",
      "#ff8c00",
      "#ffd700",
      "#90ee90",
      "#00ced1",
      "#1e90ff",
      "#c71585",
      "rgba(255, 69, 0, 0.68)",
      "rgb(255, 120, 0)",
      "hsv(51, 100, 98)",
      "hsva(120, 40, 94, 0.5)",
      "hsl(181, 100%, 37%)",
      "hsla(209, 100%, 56%, 0.73)",
      "#c7158577",
    ]);
    const data = reactive({
      form: {
        margin_top: 0,
        margin_bottom: 0,
        margin_left: 0,
        margin_right: 0,
        padding_top: 0,
        padding_bottom: 0,
        padding_left: 0,
        padding_right: 0,
        background_color: "#fff",
      },
    });
    watch(
      () => store.getters.activeComponentUid,
      (val) => {
        if (val) {
          const currentComp = store.getters.activeComponent;
          Object.assign(data.form, currentComp.common_style);
        }
      }
    );
    const handleChange = (c: number | string, old: number | undefined) => {
      store.dispatch("updateActiveCommonStyle", Object.assign({}, data.form));
    };
    return {
      ...toRefs(data),
      formRef,
      predefineColors,
      handleChange,
      components: computed(() => store.state.components),
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
