// 根据ComponentList写入vscode-snippets README.md
import fs from 'fs-extra';
import path from 'path';

import componentList from '../componentList';

const baseTemplate = fs.readFileSync(
  path.join(__dirname, '../../base-template.md'),
  'utf-8',
);

let tableTemplate = '';

componentList.forEach((f: string) => {
  if (f[0].charCodeAt(0) >= 65 && f[0].charCodeAt(0) <= 90) {
    //组件
    tableTemplate += `\n|${f}|snippet a Focus-pro ${f} Component|`;
  }
});

const fileContent = `${baseTemplate}${tableTemplate}`;
console.log(fileContent);

fs.writeFile(
  path.resolve(__dirname, '../../README.md'),
  fileContent,
  'utf-8',
).then(() => {
  console.log('生成focus-pro-vscode-snippets 成功');
});
