import router from 'umi/router';

export default (state) => {
  if (!localStorage.username && state.match.path !== '/login') {
    // 在没有登录的情况下,返回到登录页面
    router.push('/login');
  }
  return state.children;
};
