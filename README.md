# React Code39 Barcode and EAN-128


## Installation

```
npm i react-static-barcode-generator
```

## Usage

```jsx
import React from 'react';
import { Barcode39Svg } from 'react-static-barcode-generator';

const App = () => {
  return (
    <div>
      <Barcode39Svg value='123456789' />
    </div>
  );
};
```
```jsx
export default App;


import React from 'react';
import { BarcodeEANSvg } from 'react-static-barcode-generator';

const App = () => {
  return (
    <div>
      <BarcodeEANSvg value='123456789012' />
    </div>
  );
};

export default App;

```



## Props

| Prop        | Type                 | Default     | Description                                                                   |
| ----------- | -------------------- | ----------- | ----------------------------------------------------------------------------- |
| value       | string               | -           | The value to be encoded as a Code39 or EAN-128 barcode.                       |
| width       | number               | 1           | The width of each bar in pixels.                                              |
| height      | number               | 60          | The height of the barcode in pixels.                                          |
| fontSize    | number               | 16          | The font size of the text displayed below the barcode.                        |
| fontFamily  | string               | 'monospace' | The CSS font family of the text displayed below the barcode.                  |
| fontWeight  | string               | '500'       | The CSS font weight of the text displayed below the barcode.                  |
| color       | string               | "black"     | The color of the barcode.                                                     |
| textColor   | string               | "black"     | The color of the text displayed below the barcode if different from the color |
| showText    | boolean              | true        | Whether to display the text below the barcode.                                |
| lineSpacing | number               | -           | The spacing between the display text and the barcode.                         |
| className   | string               | -           | Any valid CSS class that will be applied to the barcode container             |
| id          | string               | -           | HTML id for the barcode container                                             |
| style       | React.CSSProperties  | {}          | React CSS properties that will apply to the barcode container                 |



## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
