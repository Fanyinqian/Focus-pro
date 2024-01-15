import { ZFProConfigProvider, useStyle } from "../../src/index";
import { cleanup, render } from '@testing-library/react';
import { ProConfigProvider } from '@ant-design/pro-components';

afterEach(() => {
    cleanup();
});

// describe('ZFProConfigProvider', () => {
//     it('token 在 useStyle 中应该是正确的', () => {
//         const useDemoStyle = () => {
//             return useStyle('ProCardActions', (token) => {
//                 expect(token.colorPrimary).toBe('#ff0000');
//                 expect(token.colorPrimaryBg).toBe('#00ff00');
//                 expect(token.colorPrimaryBgHover).toBe('#0000ff');
//                 return [{}];
//             });
//         };
//         const Demo = () => {
//             const { wrapSSR } = useDemoStyle();
//             return wrapSSR(<div />);
//         };
//         render(
//             <ProConfigProvider
//                 token={{
//                     colorPrimary: '#ff0000',
//                     colorPrimaryBg: '#00ff00',
//                     colorPrimaryBgHover: '#0000ff',
//                 }}
//             >
//                 <ZFProConfigProvider>
//                     <Demo />
//                 </ZFProConfigProvider>
//             </ProConfigProvider>
//         )
//     })
// })

describe('ZFProConfigProvider',() => {
    test('should render default', () => {
        const {container} = render(<ZFProConfigProvider><div></div></ZFProConfigProvider>);
        expect(container).toMatchSnapshot();
    })
})

