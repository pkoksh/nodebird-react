import React,{useCallback, useState} from 'react';
import AppLayout from '../components/AppLayout';
import {Form, Input, Checkbox, Button} from 'antd';
import Head from 'next/head';
import useInput from '../hooks/useInput.js';
import styled from 'styled-components';
const ErrorMessage = styled.div`
  color: red;
`;

const Signup =() => {

  // custom Hook 사용
  // const [id,setId] = useState("pkoksh@naver.com");
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  // const [password,setPassword] = useState("abcd1234");
  // const onChangePassword = useCallback((e) => {
  //   setPassword(e.target.value);
  // }, []);
  const [password, onChangePassword] = useInput();
  // 패스워드 확인은 입력시 앞에 패스워드와 비교해야 하기 때문에 custom hook을 사용하지 않음
  const [passwordCheck, setPasswordCheck] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback((e)=>{
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
    setTermError(term);
  },[password]);
  
  const [term, setTerm] = useState('');
  const onChangeTerm = useCallback((e)=>{
    setTermError(false);
    setTerm(e.target.checked);
  },[]);
  const [termError, setTermError] = useState(false);
   
  const onSubmit = useCallback(() => {
    if(password !== passwordCheck) {
      return setPasswordError(true);
    }
    if(!term) {
      return setTermError(true);
    }
    console.log(id,nickname,password,passwordCheck);

  },[password, passwordCheck, term]);
  return (
  <AppLayout>
    <Head>
      <title>회원가입 | NodeBird</title>
    </Head>
    <Form onFinish={onSubmit}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br/>
        <Input name="user-id" value={id} required onChange={onChangeId}/ >
      </div>
      <div>
        <label htmlFor="user-nickname">닉네임</label>
        <br/>
        <Input name="user-nickname" value={nickname} required onChange={onChangeNickname}/ >
      </div>
      <div>
        <label htmlFor="user-password">패스워드</label>
        <br/>
        <Input name="user-password" type="password" value={password} required onChange={onChangePassword}/ >
      </div>
      <div>
        <label htmlFor="user-password-check">패스워드 확인</label>
        <br/>
        <Input name="user-password-check"  type="password" value={passwordCheck} required onChange={onChangePasswordCheck}/ >
        {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
      </div>
      <div>
        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>내 말을 잘 들일 것을 동의합니다.</Checkbox>
        {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
      </div>
      <div style={{marginTop: '10px'}}>
        <Button type="primary" htmlType="submit">가입하기</Button>
      </div>
    </Form>
  </AppLayout>
);
}

export default Signup;