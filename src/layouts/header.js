import React, { useState } from 'react';
import { Menu, Affix, Dropdown, Icon, Tabs  } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import styles from './index.less';
import router from 'umi/router';

const { TabPane } = Tabs;


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

const Index = (state) => {
  const [top, setTop] = useState(0);
  const [panes, setSanes] = useState([
    { title: '首页', route: '/', key: '1' },
  ]);
  console.log("router",router)
  return (
    <>
      <Affix offsetTop={top}>
        <div className={styles.headerMain}>
          <div className={styles.right}>
            <Dropdown overlay={userMenu}>
              <a><Icon type="user" style={{ marginRight: 3 }} /></a>
            </Dropdown>
          </div>
        </div>
        <div>
          <Tabs
            type="editable-card"
            // onChange={this.onChange}
            // activeKey={activeKey}
            // onEdit={this.onEdit}
          >
            {panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key}>
              </TabPane>
            ))}
          </Tabs>
        </div>
      </Affix>
    </>
  );
}
export default withRouter(Index)