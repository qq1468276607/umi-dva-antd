import React, { useState } from 'react';
import { Menu, Affix, Dropdown, Icon, Tabs  } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import styles from './index.less';
import router from 'umi/router';
import { connect } from 'dva';

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

const panes = [
  { title: '首页', route: '/', key: '1' },
];

@connect(({ main, loading }) => ({
  tabs: main.tabs,
}))
@withRouter
class Header extends React.PureComponent  {

  constructor (props){
    super(props)
    this.state = {
     }
    }

    onChange = (path) => {
       router.push(path);
    }

    onEdit = (targetKey, action) => {
      const { tabs, dispatch, location: { pathname }  } = this.props;
      let index = 0
      tabs.map((item,idx) => {
        if(item.path === targetKey) {
          index = idx
        }
      })
      const newTabs = [...tabs];      // 需要执行深拷贝 不然直接删除dva会认为没有改变state 不会出发页面更新
      newTabs.splice(index, 1);
      dispatch({
        type: 'main/setTabs',
        payload: newTabs ,
      });
      const path = newTabs[newTabs.length - 1].path;
      if(pathname == targetKey) { // 如果删除的是当前选中的tabs标签 则跳转到前一条tab
        router.push(path);
      }
    }

    render() {
      const { tabs, location: { pathname } } = this.props;
      console.log("aa", this.props)
      return(
        <>
        <Affix offsetTop={0}>
          <div className={styles.headerMain}>
            <div className={styles.right}>
              <Dropdown overlay={userMenu}>
                <a><Icon type="user" style={{ marginRight: 3 }} /></a>
              </Dropdown>
            </div>
          </div>
          <div>
            <Tabs
              hideAdd
              type="editable-card"
              onChange={this.onChange}
              activeKey={pathname}
              onEdit={this.onEdit}
              className={styles.tabs}
            >
              {tabs.map(pane => (
                <TabPane tab={pane.name} key={pane.path}>
                </TabPane>
              ))}
            </Tabs>
          </div>
        </Affix>
      </>
      )
    }
}

export default Header;
