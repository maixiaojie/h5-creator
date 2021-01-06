<!--
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-06 11:11:00
 * @LastEditTime: 2021-01-06 11:18:42
 * @Description: file content
 * @FilePath: /h5/src/components/attrs-config/css.vue
 * @powerd by hundun
-->
<template>
  <div class="">
    <el-form ref="formRef" :model="form" label-width="100">
      <el-form-item label="css">
        <el-input type="textarea" v-model="form.css"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "AttrsConfigCSS",
  components: {},
  setup: () => {
    const store = useStore();
    const formRef = ref(null);
    const data = reactive({
      form: {
        css: "",
      },
    });
    const onSubmit = () => {
      console.log("submit!");
    };
    return {
      ...toRefs(data),
      formRef,
      onSubmit,
      components: computed(() => store.state.components),
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
