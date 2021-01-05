/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:39:50
 * @LastEditTime: 2021-01-05 16:04:21
 * @Description: data store
 * @FilePath: /h5/src/store/index.ts
 * @powerd by hundun
 */
import { createStore } from "vuex";
import { guid } from "../utils/index";
export default createStore({
  state: {
    // 组件列表
    components: [
      {
        name: "image",
        label: "图片"
      },
      {
        name: "image",
        label: "轮播图"
      },
      {
        name: "video",
        label: "视频"
      },
      {
        name: "b-button",
        label: "驻底按钮"
      }
    ],
    // 页面内容
    page_info: {
      components: []
    }
  },
  mutations: {
    addNewComponent(state: any, payload) {
      const componentInfo: any = Object.assign(
        {
          uid: guid()
        },
        payload
      );
      state.page_info.components.push(componentInfo);
    },
    delComponent(state: any, index: number) {
      state.page_info.components.splice(index, 1);
    },
    swapComponent(state: any, { oldIndex, newIndex }) {
      if (oldIndex !== newIndex) {
        const newPages = [...state.page_info.components];
        newPages.splice(oldIndex, 1);
        newPages.splice(newIndex, 0, state.page_info.components[oldIndex]);
        state.page_info.components = [...newPages];
      }
    }
  },
  actions: {},
  modules: {}
});
