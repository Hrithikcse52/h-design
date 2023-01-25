# @h-design/babel-preset

Automatically load the css for the @h-design design system.

## Installation

```sh
npm i --save-dev @h-design/babel-preset
# or
yarn add -D @h-design/babel-preset
```

## Usage

.babelrc:

```json
{
  "presets": ["@h-design/babel-preset"]
}
```

## Example

Input:

```js
import Card from '@h-design/card';
```

Output:

```js
import Card from '@h-design/card';
import '@h-design/card/dist/main.css';
```
