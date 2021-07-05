import api from '../services.js';

export default {
  namespace: 'login',
  state: {
    info: {},
  },
  effects: {
    *login({ payload }, { put, call }) {
      const response = yield call(api.login, payload);
        yield put({
          type: 'setLoginData',
          payload: response,
        });
    },
  },
  reducers: {
    setLoginData(state, { payload }) {
      return { 
        ...state, 
        info: payload 
      };
    },
  },
};
