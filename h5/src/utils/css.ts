/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-08 17:24:22
 * @LastEditTime: 2021-01-08 17:35:14
 * @Description: css into PostCss AST
 * @FilePath: /h5/src/utils/css.ts
 * @powerd by hundun
 */
import { parse, Root, Declaration, ChildNode } from "postcss";

/**
 * Finds all css delcarations
 * @param root PostCss AST Root
 */
function getCssProps(root: Root): Declaration[] {
  const { nodes } = root;

  if (!nodes) {
    return [];
  }

  function recurse(nodes: ChildNode[], declarations: Declaration[] = []) {
    nodes.forEach(item => {
      if (item.type === "decl") {
        declarations.push(item);
      } else if (item.type === "rule" && item?.nodes) {
        recurse(item.nodes, declarations);
      }
    });

    return declarations;
  }

  return recurse(nodes);
}
/**
 * Parses css into PostCss AST
 * @param css css string
 */
export function parseCss(css: string): Declaration[] {
  try {
    const root: Root = parse(css);
    return getCssProps(root);
  } catch (e) {
    throw new Error(`${e.reason} on line ${e.line}`);
  }
}
