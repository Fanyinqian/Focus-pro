import { ZFProConfigProvider, ZFSchemaForm } from 'focus-pro';

const SecretKeyForm = () => {
  const columns = [
    {
      title: 'secretKey',
      dataIndex: 'secretKey',
      valueType: 'secretKey',
      formItemProps: { required: true },
      fieldProps: {
        keyLength: 32,
        hide: false,
      },
    },
  ];

  return (
    <ZFProConfigProvider>
      <ZFSchemaForm
        layout="horizontal"
        columns={columns}
        autoFocusFirstInput={false}
        onFinish={async (v: string) => {
          console.log(v);
        }}
      ></ZFSchemaForm>
    </ZFProConfigProvider>
  );
};

export default SecretKeyForm;
