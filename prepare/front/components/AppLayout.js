import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { HomeOutlined, UserOutlined, SignatureOutlined } from '@ant-design/icons';
import {Menu, Input, Row, Col} from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  vertical-align:middle;
`;

const AppLayout = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key='1' icon={<HomeOutlined />}><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key='2' icon={<UserOutlined />}><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key='3' ><SearchInput enterButton/></Menu.Item>
        <Menu.Item key='4' icon={<SignatureOutlined />}><Link href="/signup"><a>사용자등록</a></Link></Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? 
          <UserProfile setIsLoggedIn={setIsLoggedIn}/> : 
          <LoginForm setIsLoggedIn={setIsLoggedIn} /> }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          오른쪽메뉴
        </Col>
      </Row>
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;