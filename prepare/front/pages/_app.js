//모든 화면에 공통적으로 import 되는 내용을 처리하자
import React from 'react';
import Head from 'next/head'; 
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';
const NodeBird = ({ Component } ) => {
  return (
    <>
      <Head>
        <meta charset='utf-8'/>
        <title>NodeBird</title>
      </Head>
      <Component/>
    </>
  )
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired
}

export default wrapper.withRedux(NodeBird);