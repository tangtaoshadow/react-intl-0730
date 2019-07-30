### 基于react-intl 实现国际化

*唐涛 [杭州电子科技大学](http://www.hdu.edu.cn/) 2016级 管理学院工商管理(16001324@hdu.edu.cn)*

- [个人主页](http://promiselee.cn/)  www.promiselee.cn
- [知乎](https://www.zhihu.com/people/tang-tao-24-36/activities)
- [gitee](https://gitee.com/tangtao2099)
- [github](https://github.com/tangtaoshadow)
- [Email](mailto:tangtao2099@outlook.com)  tangtao2099@outlook.com

创建时间：2019-7-30 21:34:09

修改时间：2019-7-30 21:34:15

package.json

```json
{
  "name": "react-intl-0730",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-intl": "^2.9.0",
    "react-scripts": "3.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```



文件结构：

```json
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│  yarn.lock
│
├─public
│      favicon.ico
│      index.html
│      manifest.json
│
└─src
        App.css
        App.js
        App.test.js
        en.json
        index.css
        index.js
        logo.svg
        serviceWorker.js
        zh.json

```

