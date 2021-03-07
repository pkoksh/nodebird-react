import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'
import styled from 'styled-components'
import {Menu, Input, Row, Col} from 'antd'
const AppLayout = ({children}) => {
    // const [isLoggedin, setIsLoggedin] = useState(false);
    const dummy = {
        isLoggedin : false
    }

    const SearchInput = styled(Input.Search)`
        vertical-align:middle
    `;

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                 <Col xs={24} md={6}>
                     {dummy.isLoggedin ? <UserProfile/> : <LoginForm/>}
                 </Col>
                 <Col xs={24} md={12}>
                    {children}
                 </Col>
                 <Col xs={24} md={6}>
                     <a href=''>made by shkim</a>
                 </Col>
            </Row>
            
        </div>
    );
};

AppLayout.propTypes ={
    children: PropTypes.node.isRequired,
}

export default AppLayout;