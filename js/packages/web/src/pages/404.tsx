import { Typography, Space } from 'antd';

const { Title } = Typography;

export default function Custom404() {
  return (
    <div className="error404">
      <Space align="center">
        <Title>404</Title>
        <div className="error404-divider" />
        <Title level={4} type="secondary">
          This page could not be found.
        </Title>
      </Space>
    </div>
  );
}
