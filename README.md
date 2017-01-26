# rn-swipeable
---

Completely customizable swipeable component for react native. Supports both iOS and Android. Wrapped around react-native-swipe-out.

[![NPM version][npm-image]][npm-url]

[npm-image]: http://img.shields.io/npm/v/rn-swipeable.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rn-swipeable

## Installation

`npm install --save rn-swipeable`

## Usage

```js
import Swipeable from 'rn-swipeable/lib';

<Swipeable
  left={[
    {
      text: 'reply',
      onPress:() => console.log('reply'),
      style: { backgroundColor: 'orange', color: 'white' },
      renderChildren: () => <View><Text> This is inside left children </Text></View>
    }
  ]}
  right={[
    {
      text: 'delete',
      onPress:() => console.log('delete'),
      style: { backgroundColor: 'red', color: 'white' },
      renderChildren: () => <View><Text> This is inside right children </Text></View>
    }
  ]}
  onOpen={() => console.log('open')}
  onClose={() => console.log('close')}
>
  <View style={{flex: 1, justifyContent: 'center'}}> This is inside the swipeable component </View>
</Swipeable>
```

## API

### props

| name        | description                   | type   | default    |
|-------------|------------------------|--------|------------|
| style       | swipeable style      | Object | `` |
| left       | swipeable buttons on left      | Array | `[]` |
| right       | swipeable buttons on right      | Array | `[]` |
| autoClose       | auto close on button press   | Boolean | `function() {}` |
| onOpen       |       | Function | `function() {}` |
| onClose       |       | Function | `function() {}` |
| disabled       |   disabled swipeable    | Boolean | `false` |

### button props

| name        | description                   | type   | default    |
|-------------|------------------------|--------|------------|
| text       | button text     | String | `Click` |
| style       | button style     | Object | `` |
| onPress       | button press function      | Function | `function() {}` |

## License

rn-swipeable is released under the MIT license.
