import React, { useState } from 'react';
import { Menu, Affix, Dropdown, Icon } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import styles from './index.less';
import router from 'umi/router';

const menu = [
    { path: '/', name: '首页'},
    { path: '/navone',  name: '导航1'},
    { path: '/navtwo',  name: '导航2'},
]

const userMenu = (
  <Menu>
    <Menu.Item>
      <div onClick={() => onLogout()}>退出</div>
    </Menu.Item>
  </Menu>
);

const onLogout = () => {
  localStorage.clear();
  router.push('/login');
};

const Index =(state) => {
    const [top, setTop] = useState(0);
    return (
        <>
          <Affix offsetTop={top}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" selectedKeys={[state.location.pathname]}>    
            {
                menu.map(item => (
                <Menu.Item key={item.path}>
                    <Link to={item.path}>{item.name}</Link>
                </Menu.Item>  
                ))
            }
            </Menu>
            <div className={styles.right}>
              <Dropdown overlay={userMenu}>
                <a><Icon type="user" style={{ marginRight: 3 }} /></a>
              </Dropdown>
            </div>
          </Affix>
        </>
      );
}
export default withRouter(Index)