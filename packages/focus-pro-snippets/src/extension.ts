import * as vscode from 'vscode';
import componentList from './componentList';
import formfieldList from './formfieldList';

const comfileFiles = [
  'react',
  'typescript',
  'javascript',
  'javascriptreact',
  'typescriptreact',
];

/**
 * 移入组件，出现介绍
 */
function provideHover(
  document: vscode.TextDocument,
  position: vscode.Position,
) {
  const line = document.lineAt(position);
  let isFocusComponentDom = false;
  let matchComponent = '';
  for (let i = 0; i < componentList.length; i++) {
    const component = componentList[i];
    if (line.text.includes(`<${component}`)) {
      isFocusComponentDom = true;
      if (formfieldList.includes(component)) {
        matchComponent = 'ZFProFormFields';
      } else {
        matchComponent = component;
      }
    }
  }

  if (isFocusComponentDom) {
    const isCN = vscode.env.language === 'zh-cn';
    let componentDocPath = '';
    // 拼官网路径，去掉 ZF 前缀
    for (let i = 2; i < matchComponent.length; i++) {
      const str = matchComponent[i];
      // 遇到大写字母接'-'
      if (i !== 0 && str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) {
        componentDocPath += '-';
      }
      componentDocPath += str;
    }
    const text = `${
      isCN
        ? `查看 ${matchComponent} 组件官方文档`
        : `View the official documentation of the Button component`
    }\n
Focus Pro -> https://fanyinqian.github.io/Focus-pro/components/${componentDocPath.toLowerCase()}`;

    return new vscode.Hover(text);
  }
}

/**
 * 扩展激活时调用
 * @param context 上下文，用subscritions数组存储悬停事件监听器的引用
 */
export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage(
    'Welcome to use Focus-pro-snippets ！🥳',
  );
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(comfileFiles, {
      provideHover,
    }),
  );
}

export function deactivated() {}
