import React,{useCallback} from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import useInput from '../hooks/useInput.js';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user.js';

const ButtonWrapper = styled.div`
  margin-top: 10px;
  text-align:center;
`
const FormWrapper = styled(Form)`
  padding:3px 5px;
`;
const LoginForm = () => {
  const dispatch = useDispatch();
  // 기존것을 custom Hook 으로 변경
  // const [id,setId] = useState("pkoksh@naver.com");
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);
  const [id, onChangeId] = useInput("shkim@me2.pe.kr");

  // const [password,setPassword] = useState("abcd1234");
  // const onChangePassword = useCallback((e) => {
  //   setPassword(e.target.value);
  // }, []);
  const [password, onChangePassword] = useInput("abcd1234");

  const onSubmitForm = useCallback(() => {
    console.log(id,password);
    // setIsLoggedIn(true);
    dispatch(loginAction({id,password}));
  }, [id,password]);
  return (
  <FormWrapper onFinish={onSubmitForm}>
    <div>
      <label htmlFor="user-id">아이디</label>
      <br />
      <Input name="user-id" value={id} onChange={onChangeId} required/>
    </div>
    <div>
      <label htmlFor="user-password">비밀번호</label>
      <br/>
      <Input name="user-password" type="password" value={password} onChange={onChangePassword} required/>
    </div>
    <ButtonWrapper>
      <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
      <Link href="/signup"><a><Button>회원가입</Button></a></Link>
    </ButtonWrapper>
  </FormWrapper>
  )
}

// LoginForm.propTypes = {
//   setIsLoggedIn: PropTypes.func.isRequired,
// }

export default LoginForm;