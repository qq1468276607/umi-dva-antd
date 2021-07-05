import React, { useState, useEffect } from 'react';
import router from 'umi/router';
import { Layout, Icon, Form, Input, Button, Message } from 'antd';
import { connect } from 'dva';
import styles from './login.less';

const { Content, Footer } = Layout;

const Login =({ form, dispatch, loading }) => {
  console.log("loading", loading)
  // useEffect(()=>{
  //   dispatch({
  //     type: 'login/login',
  //     payload: "1234",
  //   })
  // },[])

  const handleSubmit = () => {
    // form校验
    form.validateFields((err, values) => {
      if (!err) {
       console.log("values", values)
       localStorage.setItem('username', values.username);
       localStorage.setItem('password', values.password);
       router.push('/');
      }
    });
  };

    return (        
        <Layout>
          <Content className={styles.content}>
            <div className={styles.main}>
            <h1>管理系统（账号密码随便输）</h1>
            <Form>
              <Form.Item>
                {form.getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空',
                    },
                  ],
                })(
                  <Input
                    prefix={<Icon type="user" />}
                    placeholder="请输入用户名"
                    autoFocus
                  />,
                )}
              </Form.Item>


              <Form.Item>
                {form.getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '密码不能为空',
                    },
                  ],
                })(
                  <Input.Password
                    type="password"
                    prefix={<Icon type="lock" />}
                    placeholder="请输入密码"
                    autoFocus
                  />,
                )}
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary" 
                  htmlType="submit"
                  style={{ width: '100%' }}
                  onClick={handleSubmit}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
            </div>
          </Content>
        </Layout>
      );
}

export default connect(state => ({
  loading: state.loading.effects['login/login'],
}))(Form.create()(Login));
