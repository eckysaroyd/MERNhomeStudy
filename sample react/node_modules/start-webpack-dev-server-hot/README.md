# start-webpack-dev-server-hot

[![npm](https://img.shields.io/npm/v/start-webpack-dev-server-hot.svg?style=flat-square)](https://www.npmjs.com/package/start-webpack-dev-server-hot)

[Hot Module Replacement] wrapper for [start-webpack-dev-server]


It does 3 things:

1. Adds `{hot: true}` in `devServerOptions`
2. Inserts HMR plugin in your webpack config: `new webpack.HotModuleReplacementPlugin()`
3. Insert these 2 files in your entry point(s):

        'webpack/hot/dev-server',
        'webpack-dev-server/client?',

It basically achieves the same purpose as the [webpack-dev-server]'s CLI switches `--hot --inline`

## Install

```sh
npm install --save-dev start-webpack-dev-server-hot
# or
yarn add --dev start-webpack-dev-server-hot
```

## Usage

```js
import Start from 'start';
import reporter from 'start-pretty-reporter';
import webpackDevServerHot from 'start-webpack-dev-server-hot';

const start = Start(reporter());

export const dev = () => start(
  webpackDevServerHot(require('conf/webpack.dev'))
);
```

## Arguments

Since it's basically a wrapper, it accepts the same arguments as [start-webpack-dev-server].

[Hot Module Replacement]: https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
[start-webpack-dev-server]: https://github.com/start-runner/webpack-dev-server
[webpack-dev-server]: https://webpack.github.io/docs/webpack-dev-server.html
