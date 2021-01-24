const path = require('path');

module.exports = {
  webpackOptions: {
    port: 9898,
    entry: path.resolve(__dirname, './examples/common/index.tsx'),
    entryHtml: path.resolve(__dirname, './examples/common/index.html'),
    tsShouldBabel: true,
  },
  libsOptions: [
    {
      entry: path.resolve(__dirname, './packages/array-queue/src/index.ts'),
      pkgPath: path.resolve(__dirname, './packages/array-queue'),
      bundleName: 'index',
      isTs: true,
      esm: {
        buildType: 'rollup',
      },
      cjs: {
        buildType: 'rollup',
      },
      umd: {
        buildType: 'rollup',
      },
      umdGlobals: {},
    },
  ],
};
