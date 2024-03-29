import { ZFProForm, ZFProFormTags } from 'focus-pro';

const ProForm = () => {
  const valueEnum = {
    P0: {
      text: 'P0',
      status: 'P0',
    },
    P1: {
      text: 'P1',
      status: 'P1',
    },
    P2: {
      text: 'P2',
      status: 'P2',
    },
    P3: {
      text: 'P3',
      status: 'P3',
    },
    P4: {
      text: 'P4',
      status: 'P4',
    },
  };

  return (
    <ZFProForm>
      <ZFProFormTags valueEnum={valueEnum} />
    </ZFProForm>
  );
};

export default ProForm;
