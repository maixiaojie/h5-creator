/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:39:50
 * @LastEditTime: 2021-01-06 11:57:24
 * @Description: data store
 * @FilePath: /h5/src/store/index.ts
 * @powerd by hundun
 */
import { createStore } from "vuex";
import { guid } from "../utils/index";
const commonStyle = {
  margin_top: 0,
  margin_bottom: 0,
  margin_left: 0,
  margin_right: 0,
  padding_top: 0,
  padding_bottom: 0,
  padding_left: 0,
  padding_right: 0,
  background_color: "#fff"
};
export default createStore({
  state: {
    // 组件列表  name需要唯一
    components: [
      {
        name: "image",
        label: "图片",
        style: "",
        attrs: {
          // 图片url
          src: "http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg"
        }
      },
      // {
      //   name: "images",
      //   label: "轮播图",
      //   attrs: {}
      // },
      {
        name: "video",
        label: "视频",
        attrs: {
          // 封面图
          poster: "http://h5.dooring.cn/uploads/1_1740c6fbcd9.png",
          // 视频url
          src:
            "https://gossv.vcg.com/cmsUploadVideo/creative/1%E7%A7%BB%E8%BD%B4/7%E6%9C%88%E7%A7%BB%E8%BD%B4.mp4",
          // 是否静音
          muted: false,
          // 是否自动播放
          autoplay: false
        }
      }
      // {
      //   name: "b-button",
      //   label: "驻底按钮"
      // }
    ],
    // 页面内容
    page_info: {
      title: "",
      share_info: {
        share_title: "",
        share_content: "",
        share_logo: ""
      },
      components: []
    }
  },
  mutations: {
    addNewComponent(state: any, { name }) {
      const comp = state.components.filter((e: any) => e.name === name);
      if (comp.length > 0) {
        const componentInfo: any = Object.assign(
          {
            uid: guid(),
            common_style: { ...commonStyle }
          },
          comp[0]
        );
        console.log(componentInfo);
        state.page_info.components.push(componentInfo);
      }
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
