import { TableDropdown } from '@ant-design/pro-components';
import type { MenuItemProps } from 'antd';
import { Divider, Popconfirm, Space } from 'antd';
import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';
import { Action, ActionConfig, ActionFn, ZFProColumns } from './typing';
import { getActionCollapsedData, isActionFunction } from './utils';

interface MenuItems extends MenuItemProps {
  name: React.ReactNode;
  key: string;
  title?: string;
}

const columnRender = <DataType, valueType>(props: {
  columns: ZFProColumns<DataType, valueType>[];
}) => {
  const { columns } = props;
  /** 把折叠的数组根据 type 转换为TableDrop的配置项 */
  const getActionMenusByType = (
    actions: Action<DataType>[],
    record: DataType,
  ) => {
    // 对纯函数和设置hide的操作对象做额外处理
    return actions
      .filter((action) => {
        if (isActionFunction<DataType>(action)) return true;
        return !(action?.useHide && action?.useHide(record));
      })
      .map((action, index) => {
        // 如果是纯函数
        if (isActionFunction<DataType>(action)) {
          console.log(action(record));
          return {
            name: action(record),
            key: `key-${index}`,
          };
        }
        // 如果是hide的操作对象
        const { type, text, useDisable = () => false } = action;

        const disabled = useDisable(record);
        const baseProps = {
          key: `key-${index}`,
          disabled: disabled,
        };

        if (type === 'Edit') {
          return {
            name: text || '编辑',
            onClick: () => {
              action?.onEdit(record);
            },
            ...baseProps,
          };
        }
        if (type === 'Delete') {
          return {
            name: text || '删除',
            onClick: () => {
              action?.onDelete(record);
            },
            ...baseProps,
          };
        }
        if (type === 'Click') {
          return {
            name: text || '点击',
            onClick: () => {
              action?.onClick(record);
            },
            ...baseProps,
          };
        }
        if (type === 'Navigate') {
          const to = action?.useNavigate(record);
          return {
            name: (
              <Link
                // @ts-ignore
                disabled={disabled}
                target={action?.target || '_self'}
                style={disabled ? { pointerEvents: 'none' } : {}}
                {...(typeof to === 'string' ? { to } : to)}
              >
                {text || '查看'}
              </Link>
            ),
            ...baseProps,
          };
        }
        return {};
      });
  };

  /** 根据 type 类型渲染节点 */
  const getActionNodeByType = (
    action: ActionConfig<DataType>,
    record: DataType,
  ): React.ReactNode => {
    const {
      type,
      text = '',
      useDisable = () => false,
      useHide = () => false,
    } = action;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const disabled: boolean = useDisable(record);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isHide = useHide(record);

    if (isHide) return null;

    if (type === 'Edit') {
      return (
        <LinkButton
          onClick={() => {
            action?.onEdit?.(record);
          }}
          disabled={disabled}
        >
          {text || '编辑'}
        </LinkButton>
      );
    }
    if (type === 'Delete') {
      return (
        <Popconfirm
          title="确定要删除吗？"
          onConfirm={() => {
            action?.onDelete?.(record);
          }}
          okText="删除"
          okButtonProps={{ danger: true }}
          disabled={disabled}
        >
          <LinkButton disabled={disabled}>{text || '删除'}</LinkButton>
        </Popconfirm>
      );
    }
    if (type === 'Navigate') {
      const to = action?.useNavigate(record);
      return (
        <Link
          // @ts-ignore
          disabled={disabled}
          target={action?.target || '_self'}
          style={disabled ? { pointerEvents: 'none' } : {}}
          {...(typeof to === 'string' ? { to } : to)}
        >
          {text || '查看'}
        </Link>
      );
    }
    if (type === 'Click') {
      return (
        <LinkButton onClick={() => action?.onClick(record)} disabled={disabled}>
          {text || '点击'}
        </LinkButton>
      );
    }
  };

  /** 分发渲染节点 */
  const getActionNodes = (actions: Action<DataType>[], record: DataType) => {
    return actions.map((action) => {
      if (isActionFunction<DataType>(action)) {
        return action(record);
      }
      return getActionNodeByType(action, record);
    });
  };

  // 返回columns数组中第一个使用 valueType:option 的下标
  const optionColumnIndex = columns?.findIndex(
    ({ valueType }) => valueType === 'option',
  );

  if (optionColumnIndex > -1) {
    const optionColumn = columns[optionColumnIndex];
    const { render, actions } = optionColumn;

    // 如果没有自定义render 且 actions 是合法类型
    if (!render && actions && Array.isArray(actions)) {
      // 定义render渲染节点
      optionColumn.render = (_, record) => {
        const [collapsedActions, notCollapsedActions] = getActionCollapsedData<
          Action<DataType> | ActionFn<DataType>,
          DataType
        >(actions, record);
        // 获取折叠数组处理后的菜单项数组
        const menus = getActionMenusByType(collapsedActions, record);
        // 未折叠 | 折叠
        return (
          <Space split={<Divider type="vertical"></Divider>} size={0}>
            {getActionNodes(notCollapsedActions, record)}
            {!!menus?.length && <TableDropdown menus={menus as MenuItems[]} />}
          </Space>
        );
      };
    }
    columns[optionColumnIndex] = optionColumn;
  }
  return columns;
};

export default columnRender;
