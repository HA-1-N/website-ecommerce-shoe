import CommonHeaderContent from '@/components/auth/CommonHeaderContent';
import MenuProfile from '@/components/MenuProfile';
import { Col, Row } from 'antd';

export default function Layout({ children }: { children: any }) {
  const data = [
    {
      name: 'Home',
      href: '/',
    },
  ];

  return (
    <>
      <div>
        <CommonHeaderContent data={data} title="Profile" currentPage="Profile" />
        <div className="p-8 container m-auto">
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <MenuProfile />
            </Col>
            <Col span={18}>
              <div>{children}</div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
