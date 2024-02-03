import { ZFProForm, ZFProFormSecretKey } from 'focus-pro';

const ProForm = () => {
  return (
    <ZFProForm>
      <ZFProFormSecretKey fieldProps={{ hide: false, keyLength: 8 }} />
    </ZFProForm>
  );
};

export default ProForm;
