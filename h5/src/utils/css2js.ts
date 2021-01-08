/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-08 17:29:13
 * @LastEditTime: 2021-01-08 19:05:51
 * @Description: file content
 * @FilePath: /h5/src/utils/css2js.ts
 * @powerd by hundun
 */
import { parseCss } from "./css";

export function transform(css: string): any {
  const declarations = parseCss(css);

  const propMap = new Map<string, string | number>();
  const obj = Object.create(null)

  declarations.forEach(decl => {
    const prop: string = decl.prop;
    const value: string | number = decl.value;
    // const numVal = Number(value);

    // Remove duplicate and maintain
    // position of item
    if (propMap.has(prop)) {
      propMap.delete(prop);
    }
    propMap.set(prop, value);
  });
  for (const [k, v] of propMap) {
    console.log(k, v)
    obj[k] = v;
  }
  return obj
}
