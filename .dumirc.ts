import { defineConfig } from 'dumi';
// github仓库名称
const defaultPath = '/Focus-pro';
// 打包后gh-pages默认会拼接仓库名称在路径上
const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : '';

export default defineConfig({
  base: defaultPath,
  publicPath: `${baseUrl}/`,
  outputPath: 'docs-dist',
  logo: '/images/pro.png',
  favicons: ['/images/favicon.png'],
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
