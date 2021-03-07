import React, {useState,useCallback}  from 'react'
import {Input,Form,Button} from 'antd'
import styled from 'styled-components'
import Link from 'next/link'
const LoginForm = () => {
    const [id, setId] = useState("pkoksh@naver.com");
    const [password , setPassword] = useState("abcd1234");
    
    const ButtonWrapper = styled.div`
        margin-top: 10px;
    `;
    const onChangeId = useCallback(
        (e) => {
            setId(e.target.value);
        },
        [],
    )
    const onChangePassword = useCallback(
        (e) => {
            setPassword(e.target.value);
        },
        [],
    )
    const onSubmitForm = useCallback(
        ()=>{
            console.log(id, password)
        },
        [id, password]
    );

    return (
        <Form onFinish={onSubmitForm}>
            <div>
               <label htmlFor="user-id">아이디</label> 
               <br/>
               <Input id="user-id" type="text" value={id} onChange={onChangeId} required/>
            </div>
            <div>
               <label htmlFor='user-pwd'>비밀번호</label> 
               <br/>
               <Input 
                id="user-pwd"
                value={password} 
                onChange={onChangePassword} 
                type="password"
                required
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="./signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </Form>
    )
}
export default LoginForm;