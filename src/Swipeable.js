import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';
import Swipe from 'react-native-swipe-out';

export default class Swipeable extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    autoClose: PropTypes.bool,
    disabled: PropTypes.bool,
    left: PropTypes.arrayOf(PropTypes.object),
    right: PropTypes.arrayOf(PropTypes.object),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.any,
    style: PropTypes.object,
  };

  static defaultProps = {
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() {},
    onClose() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      paddingTop: 0,
    };
  }

  renderCustomButton(button) {
    const { renderChildren, style } = button;
    const bgColor = style.backgroundColor || 'transparent';
    const childComponent = (
      <View
        style={[{
          flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor,
        }, style]}
      >
        {renderChildren()}
      </View>
    );

    return {
      text: button.text || 'Click',
      onPress: button.onPress,
      type: 'default',
      component: childComponent,
      backgroundColor: 'transparent',
      color: '#999',
      disabled: false,
    };
  }

  render() {
    const { disabled,
            autoClose,
            style,
            left,
            right,
            onOpen,
            onClose,
            children } = this.props;

    const customLeft = left.map(btn => {
      return this.renderCustomButton(btn);
    });
    const customRight = right.map(btn => {
      return this.renderCustomButton(btn);
    });

    return (left.length || right.length) && !disabled ? (
      <Swipe
        autoClose={autoClose}
        left={customLeft}
        right={customRight}
        style={style}
        onOpen={onOpen}
        onClose={onClose}
      >
        {children}
      </Swipe>
    ) : (
      <View style={style}>
        {children}
      </View>
    );
  }
}
