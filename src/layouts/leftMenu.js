import React from 'react';
import { Menu } from 'antd';
import withRouter from 'umi/withRouter';
import Link from 'umi/link';

const { SubMenu } = Menu;
const menu = [
  { path: '/', name: '首页', child: ''},
  { path: '',  name: '导航1', child: [ { path: '/navone',  name: '子集1' },{ path: '/navtwo',  name: '子集2' } ]},
]
class LeftMenu extends React.Component {
  state = {
   
  };

  render() {
    console.log("menu", menu)
    return (
      <div style={{ width: 220, height: '100vh', backgroundColor: '#001529' }}>
        <Menu
          defaultSelectedKeys={['/']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          {
            menu.map(item => {
              if(item.child.length > 0 ) {
                return <SubMenu key={item.path} title={item.name} icon={item.icon}>
                  {
                    item.child && item.child.map(val => {
                      return  <Menu.Item key={val.path} icon={val.icon}><Link to={val.path}>{val.name}</Link></Menu.Item>
                    })
                  }
              </SubMenu>
              } else {
                return <Menu.Item key={item.path} icon={item.icon}>
                 <Link to={item.path}>{item.name}</Link>
               </Menu.Item>
              }
            })
          }
        </Menu>
      </div>
    );
  }
}

export default withRouter(LeftMenu)