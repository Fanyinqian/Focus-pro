/**
 * nav:
 *   title: 主题编辑器
 *   path: /theme-editor
 *   order: 10
 * sidebar: false
 *
 */
import {
  Button,
  ConfigProvider,
  ThemeConfig,
  theme as antdTheme,
  message,
} from 'antd';
import type { Theme } from 'antd-token-previewer';
import { ThemeEditor, enUS, zhCN } from 'antd-token-previewer';
import antdZhCN from 'antd/locale/zh_CN';
import { FC, useEffect, useState } from 'react';

const ANT_DESIGN_V5_THEME_EDITOR_THEME = 'antd-design-v5-theme-editor-theme';

const AntdThemeEditor: FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  // 语言设置
  const [lang, setLang] = useState<string>('zh-CN');
  const [isDark, setIsDark] = useState(false);
  // 主题的配置项，对标antd的 theme.config
  const [theme, setTheme] = useState<ThemeConfig>({});

  // 一进入页面就判断本地存储是否有历史主题，有则使用
  useEffect(() => {
    const storeConfig = localStorage.getItem(ANT_DESIGN_V5_THEME_EDITOR_THEME);
    if (storeConfig) {
      setTheme(() => JSON.parse(storeConfig));
    }
  }, []);

  // 保存主题
  const handleSave = () => {
    console.log(theme);
    localStorage.setItem(
      ANT_DESIGN_V5_THEME_EDITOR_THEME,
      JSON.stringify(theme),
    );
    messageApi.success('保存成功');
  };

  return (
    <>
      {contextHolder}
      <ConfigProvider
        locale={lang === 'zh-CN' ? antdZhCN : undefined}
        theme={{
          hashed: true,
          algorithm: isDark ? antdTheme.darkAlgorithm : undefined, // 暗色算法
        }}
      >
        <ThemeEditor
          theme={{ name: 'Antd Theme Editor', key: 'test', config: theme }}
          onThemeChange={(newTheme: Theme) => setTheme(newTheme.config)}
          locale={lang === 'zh-CN' ? zhCN : enUS}
          advanced
          style={{ height: 'calc(100vh - 64px)' }}
          actions={
            <>
              <Button
                type="text"
                icon={lang === 'zh-CN' ? '中' : 'EN'}
                onClick={() => setLang(lang === 'en-US' ? 'zh-CN' : 'en-US')}
                style={{ marginRight: 8 }}
              />
              <Button type="primary" onClick={handleSave}>
                保存
              </Button>
            </>
          }
        />
      </ConfigProvider>
    </>
  );
};

export default AntdThemeEditor;
