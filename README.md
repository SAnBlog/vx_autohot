# 微信小程序 autohot

## 介绍

抓取爬虫微信小程序，页面显示抓取的热门资讯，后台同时开源，增加一个咨询只需要实现一个接口即可，接口简单适合新手入门学习。
后台使用的爬虫框架Earth：https://gitee.com/SAnBlog/Earth

## 说明

* 首页每个按钮均为不同热门，点击展示不同热门数据，数据一次性加载全部。
* 后台默认第一次抓取数据时缓存到内存（时效一个小时）。
* 接口返回图片url时展示图片，否则无。

## 使用

* 克隆本项目代码到本地

```
git clone https://gitee.com/SAnBlog/autohot.git
cd autohot
```

* 打开微信开发者工具；
* 添加项目->选择本项目目录->编译执行；

## 预览

界面简陋，请多包涵。

![](/imgage/1.png)
![](/imgage/2.png)
![](/imgage/3.png)

## 资源

* [小程序开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)
