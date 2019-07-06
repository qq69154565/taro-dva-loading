import Taro from '@tarojs/taro';
import { create } from 'dva-core';
import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';
import createImmer from 'dva-immer';

declare var global: any;

let app: any;
let store: any;
let dispatch: any;

function createApp(opt) {
  opt.onAction = [createLogger()];
  app = create(opt);
  app.use(createLoading());
  app.use(createImmer());

  // 适配支付宝
  if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
    global = {};
  }

  if (!global.registered) opt.models.forEach(model => app.model(model));
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
};
