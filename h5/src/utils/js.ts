/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-08 17:36:30
 * @LastEditTime: 2021-01-08 18:57:35
 * @Description: js str into object
 * @FilePath: /h5/src/utils/js.ts
 * @powerd by hundun
 */
import prettier from "prettier/standalone";
import prettierBabel from "prettier/parser-babel";

/**
 * Takes a JS object written as a string and formats it.
 * @param objString string that defines a JS object
 */
export function formatJsObject(objString: string) {
  // Write object in a piece of JS code so Prettier knows how to format it

  const codeString = prettier.format(objString, {
    parser: "json",
    tabWidth: 0,
    singleQuote: true,
    trailingComma: 'none',
    bracketSpacing: false,
    quoteProps: "preserve",
    plugins: [prettierBabel]
  });

  const jsStr = codeString.trim();
  return jsStr;
}
