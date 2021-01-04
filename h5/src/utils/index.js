/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-04 11:10:44
 * @LastEditTime: 2021-01-04 11:25:40
 * @Description: 工具函数
 * @FilePath: /h5/src/utils/index.js
 * @powerd by maixiaojie
 */
export const guid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
