import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import 'antd/dist/antd.css'


//모든 화면에 들어가는 공통 설정
const NodeBird = ({Component}) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>
    );
}

//안전을 위해 자료형 검사
NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird;