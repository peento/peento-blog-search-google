peento-blog-search-google
=========================

peento-blog的搜索框使用 [Google搜索](https://google.com/)


使用方法
========

```JavaScript
app.use('blog');

// 在blog插件后执行
app.use('blog-search-google');
```


配置
====

```JavaScript
config.search = {
  name: '当前网站域名'    // 可选
};
```


授权协议
========

**The MIT License**
