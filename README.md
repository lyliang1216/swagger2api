# 目前公司内部用的自动转api工具

## 安装

```shell
npm i swagger2apis -D
pnpm i swagger2apis -D
```

## 配置

在你项目里生成一个

```js
import wantedApi, { getCurrentDirName } from 'swagger2apis';
import { join } from 'path'

wantedApi([
  {
    url: 'http://10.200.100.14:8294/v2/api-docs?group=proxy',
    outDir: join(getCurrentDirName(import.meta.url), './a'),
    apiUrlPrefix: '/proxy',
    templatePath: {
      api: join(getCurrentDirName(import.meta.url), './apis.eta'),
      interface: join(getCurrentDirName(import.meta.url), './interface.eta')
    }
  },
  {
    url: 'http://10.200.100.14:8294/v2/api-docs?group=proxy',
    outDir: join(getCurrentDirName(import.meta.url), './b'),
    apiUrlPrefix: '/proxy',
    needJS: true,
    templatePath: {
      api: join(getCurrentDirName(import.meta.url), './apis.eta'),
      interface: join(getCurrentDirName(import.meta.url), './interface.eta')
    }
  }
])

```

## 使用
