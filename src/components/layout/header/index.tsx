import { useContext } from "react";
import { useGetIdentity, useNavigation, useLogout } from "@pankod/refine-core";
import {
  Space,
  Avatar,
  Typography,
  Switch,
  Dropdown
} from "@pankod/refine-antd";
import { ColorModeContext } from "contexts";
import { UserOutlined, AppstoreOutlined, LogoutOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd';

const { Text } = Typography;

const items: MenuProps['items'] = [
  {
    key: 'profile',
    label: 'Profile',
    icon: <UserOutlined />,
  },
  {
    key: 'apps',
    label: 'Apps',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'logout',
    label: 'Logout',
    icon: <LogoutOutlined />,
  },
]

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();
  const { mode, setMode } = useContext(ColorModeContext);
  const navigation = useNavigation();
  const { mutate: logout } = useLogout<{ redirectPath: string }>();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "64px",
      }}
    >
      <Switch
        checkedChildren="🌛"
        unCheckedChildren="🔆"
        onChange={() => setMode(mode === "light" ? "dark" : "light")}
        defaultChecked={mode === "dark"}
      />
      <Dropdown 
        menu={{ 
          items,
          onClick: ({ key }) => {
            if (key === 'logout') {
              logout();
            }
            navigation.push('/' + key);
          }
        }} 
      >
        <Space style={{ marginLeft: "8px", cursor: "pointer" }}>
          {user?.id && (
            <Text ellipsis strong>
              {user.name || user.email }
            </Text>
          )}
          {user?.avatar? 
            <Avatar src={user?.avatar} alt={user?.name} />:
            <Avatar icon={<UserOutlined />}/>
          }
        </Space>
      </Dropdown>
    </div>
  );
};
