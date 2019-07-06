const testModel = {
  namespace: 'test',
  state: {},
  effects: {
    *dispatchHello() {
      console.log('Hello');
    }
  },
  reducers: {}
};

export default testModel;
