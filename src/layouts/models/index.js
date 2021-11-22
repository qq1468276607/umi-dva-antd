import router from 'umi/router';

export default {
  namespace: 'main',
  state: {
    info: {},
    tabs: [
      { name: "首页", path: "/" }
    ],
  },
  effects: {
    *getTabs({ payload }, { put, call, select }) {
      const tabs = yield select(state => state.main.tabs);
      tabs.push({
        name: payload.name,
        path: payload.path,
      })
      let map = new Map();  // 菜单去重
      for (let item of tabs) {
        if (!map.has(item.name)) {
          map.set(item.name, item);
        }
      }
      yield put({
        type: 'setTabs',
        payload: [...map.values()],
      });
    },
  },
  reducers: {
    setTabs(state, { payload }) {
      console.log("payload", payload)
      return {
        ...state,
        tabs: payload
      };
      // const { groupClasses, extraAttr } = payload;
      // state.groupClasses = groupClasses;
      // state.extraAttr = extraAttr;
    },
  },
};
