import styles from './index.less';
import Header from './header';
import { Layout, ConfigProvider, Spin  } from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
import enUS from 'antd/lib/locale/en_US';  // 英文
import zhCN from 'antd/lib/locale/zh_CN';  // 中文

const { Content } = Layout;
function BasicLayout(props) {
    // 全局布局 登录页面
  if (props.location.pathname === '/login') {
    return props.children;
  }
  return (
    <ConfigProvider locale={zhCN}>
      <Layout className="basic-layout" style={{ height: window.innerHeight }}>
        <Spin tip="Loading..." spinning={props.loading}>
          <Header />
          <Content>
            <div>{props.children}</div>
          </Content>
        </Spin>
     </Layout>
    </ConfigProvider>
  );
}

// export default BasicLayout;
export default connect(state => ({
  loading: state.loading.global,  // 监听全局loading
}))(BasicLayout);
