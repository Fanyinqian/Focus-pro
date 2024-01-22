import { defineConfig } from 'dumi';

export default defineConfig({
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
  base: '@yq/focus-pro',
  publicPath: '@yq/focus-pro',
});
