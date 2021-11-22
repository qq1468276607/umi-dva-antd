import React from 'react';
import { Menu } from 'antd';
import withRouter from 'umi/withRouter';
import router from 'umi/router';
import { connect } from 'dva';

const { SubMenu } = Menu;
const menu = [
  { path: '/', name: '首页', child: ''},
  { path: '',  name: '导航1', child: [ { path: '/navone',  name: '子集1' },{ path: '/navtwo',  name: '子集2' } ]},
]

@withRouter
@connect(({ main, loading }) => ({
  info: main.info,
  tabs: main.tabs,
}))

class LeftMenu extends React.PureComponent  {
  constructor (props){
    super(props)
    this.state = {
      tabs:[],
     }
    }

  go = (path, name) => {
    const { dispatch } = this.props;
    const nowRoute = { path, name }
    router.push(path)
    dispatch({
      type: 'main/getTabs',
      payload: nowRoute ,
    });
   
  }



  render() {
    const { location: { pathname } } = this.props;
    return (
      <div style={{ width: 220, height: '100vh', backgroundColor: '#001529' }}>
        <Menu
          defaultSelectedKeys={['/']}
          selectedKeys={[pathname]}
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
                      return  <Menu.Item key={val.path} icon={val.icon}><div onClick={() => this.go(val.path, val.name)}>{val.name}</div></Menu.Item>
                    })
                  }
              </SubMenu>
              } else {
                return <Menu.Item key={item.path} icon={item.icon}>
                  <div onClick={() => this.go(item.path, item.name)}>{item.name}</div>
               </Menu.Item>
              }
            })
          }
        </Menu>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {

//   };
// };

// const Index =  withRouter(LeftMenu)
// export default connect(mapStateToProps)(Index);
export default LeftMenu;

