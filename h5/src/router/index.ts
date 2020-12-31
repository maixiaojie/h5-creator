/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:39:15
 * @LastEditTime: 2020-12-31 17:41:30
 * @Description: file content
 * @FilePath: /h5/src/router/index.ts
 * @powerd by hundun
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
