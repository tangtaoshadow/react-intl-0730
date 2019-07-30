### 基于react-intl 实现国际化

*唐涛 [杭州电子科技大学](http://www.hdu.edu.cn/) 2016级 管理学院工商管理(16001324@hdu.edu.cn)*

- [个人主页](http://promiselee.cn/)  www.promiselee.cn
- [知乎](https://www.zhihu.com/people/tang-tao-24-36/activities)
- [gitee](https://gitee.com/tangtao2099)
- [github](https://github.com/tangtaoshadow)
- [Email](mailto:tangtao2099@outlook.com)  tangtao2099@outlook.com

创建时间：2019-7-30 21:34:09

修改时间：2019-7-30 22:48:31



**package.json**

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



**文件结构**

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



**中文文档**

```json
{
    "app.text": "杭州电子科技大学 管理学院 2016级 唐涛 tangtao2099@outlook.com ",
    "app.learn-react-link": "我的主页"
}
```



**英文文档**

```json
{
    "app.text": "HDU 2016 Industry & Business Administration TangTao tangtao2099@outlook.com",
    "app.learn-react-link": "My Homepage"
}
```



**语言配置**

```html
<img src={logo} className="App-logo" alt="logo" />
        <p>
            <FormattedHTMLMessage id="app.text"
                defaultMessage="杭州电子科技大学 唐涛 管理学院 2016级tangtao2099@outlook.com "
                description="杭州电子科技大学 唐涛 "
                values={{ what: 'react-intl' }}/>
        </p>
        <a className="App-link" href="https://www.woaihdu.top" target="_blank" rel="noopener noreferrer">
            <FormattedMessage 
                id="app.learn-react-link"
                defaultMessage=""
                description="Link on react page"/>
        </a>
```



**参数说明**

| 参数             | 选择   | 描述                                                         |
| ---------------- | ------ | ------------------------------------------------------------ |
| `id`             | 需要   | 用于引用翻译的标识符                                         |
| `description`    | 可选的 | 消息的描述 - 为翻译者提供工作的一些上下文                    |
| `defaultMessage` | 可选的 | 如果未找到转换，则显示默认消息。这可能已经是您主要语言的文本 |
| `values`         | 可选的 | 包含消息参数的对象\| {.table .table-striped}                 |



**运行**

```json
npm  install
npm  run start
```



**效果**



![效果](http://cdn.promiselee.cn/share_static/react-intl-20190730220142.png)







