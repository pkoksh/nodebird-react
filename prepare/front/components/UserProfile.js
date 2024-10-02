import React,{useCallback} from 'react';
import { Card, Avatar, Button } from 'antd';
import { logoutAction } from '../reducers/user';
import { useDispatch } from 'react-redux';
const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback( (e)=>{
    // setIsLoggedIn(false);
    dispatch(logoutAction());
  },[])
  return (
    <Card
      actions={[
        <div key="twit">짹짹<br/>0</div>,
        <div key="followings">팔로잉<br/>0</div>,
        <div key="followers">팔로워<br/>0</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>SH</Avatar>}
        title="SangHyun Kim"
      />

      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  )
}
export default UserProfile;