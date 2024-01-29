import { defineConfig } from 'dumi';
import path from 'path';
// github仓库名称
const defaultPath = '/Focus-pro';
// 打包后gh-pages默认会拼接仓库名称在路径上
const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : '';

export default defineConfig({
  base: defaultPath,
  publicPath: `${baseUrl}/`,
  outputPath: 'docs-dist',
  logo: `${baseUrl}/images/pro.png`,
  favicons: [`${baseUrl}/images/favicon.png`],
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'packages/components/src' }],
  },
  alias: {
    'focus-pro': path.join(__dirname, 'packages/components/src'),
    '@': path.join(__dirname, 'packages/components/src'),
  },
  themeConfig: {
    name: 'focus pro',
    prefersColor: {
      default: 'auto',
      switch: true,
    },
    siteToken: {
      headerHeight: 64,
      footerHeight: 300,
      sidebarWidth: 240,
      tocWidth: 176,
      contentMaxWidth: 1474,
      demoInheritSiteTheme: false, // 默认的 demo 主题不会跟随网站主题变化
    },
    // footer: false,
  },
});
