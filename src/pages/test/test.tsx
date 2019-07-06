import Taro from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { View, Button } from "@tarojs/components";

@connect(({ loading }) => ({ loading }))
class Test extends Taro.Component<any, any> {
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }

  render() {
    return (
      <View>
        <Button onClick={() => this.props.dispatch({ type: "test/dispatchHello" })}>
          test
        </Button>
      </View>
    );
  }
}

export default Test;
