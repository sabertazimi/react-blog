import React from 'react';
import { Link } from 'gatsby';
import { Row, Col, Menu, Popover, Image } from 'antd';
import { BarsOutlined } from '@ant-design/icons';
import { Colors, Routes } from '@config';
import logo from 'images/logo-full.png';

const MobileNav = ({ className }) => (
  <Row type="flex" justify="space-around" align="middle" className={className}>
    <Col span={12} offset={6}>
      <Link to="/">
        <Image
          src={logo}
          alt="Logo"
          preview={false}
          width="6rem"
          height="6rem"
        />
      </Link>
    </Col>
    <Col span={6}>
      <Popover
        placement="bottomRight"
        content={
          <Menu
            mode="vertical"
            style={{
              width: '100%',
              minWidth: '400px',
              textAlign: 'center',
              fontWeight: 800,
            }}
          >
            {Routes.map((route) => (
              <Menu.Item key={route.id}>
                <Link to={route.path}>{route.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        }
        trigger="click"
      >
        <BarsOutlined style={{ fontSize: '2em', color: Colors.primary }} />
      </Popover>
    </Col>
  </Row>
);

export default MobileNav;
