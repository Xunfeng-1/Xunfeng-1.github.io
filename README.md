# Xunfeng 的博客

用 [Hexo](https://hexo.io/) 和 [hexo-theme-stellar](https://github.com/xaoxuu/hexo-theme-stellar)（MIT）搭建的个人博客。站点语言为 zh-CN，时区为 Asia/Shanghai，发布地址是 <https://xunfeng-1.github.io>。

本地需要 Node.js 22 或更高版本。

## 本地预览

```bash
npm install
npx hexo generate
npx hexo server
```

浏览器打开 <http://localhost:4000>。

## 写一篇新文章

在仓库根目录执行：

```bash
npx hexo new post "文章标题"
```

命令会在 `source/_posts/` 下生成 `年-月-日-文章标题.md`。打开这个文件，补上分类、标签和正文，例如：

```markdown
---
title: 文章标题
date: 2026-11-06 21:00:00
categories:
  - 随笔
tags:
  - 笔记
---

正文从这里开始。
```

常用页面：

| 页面 | 路径 |
| --- | --- |
| 博客首页 | `/` |
| 分类 | `/categories/` |
| 标签 | `/tags/` |
| 归档 | `/archives/` |
| 关于 | `/about/` |
| 运动 | `/workout/` |
| Atom 订阅 | `/atom.xml` |

运动页是占位：页面里嵌了 `https://xunfeng-1.github.io/workouts/`。Garmin 国际区的跑步仪表盘会在另一个仓库里用 running_page 做好后再接上，目前可能打不开。

侧栏里的「阅读」入口先注释掉了，笔记页准备好之后再在 `_config.stellar.yml` 里打开。

## 发布到 GitHub Pages

推送到 `main` 分支后，GitHub Actions 会执行 `npx hexo generate`，再用 `actions/upload-pages-artifact` 和 `actions/deploy-pages` 发布。

仓库需要手动改一次 Pages 来源，否则部署任务找不到站点：

1. 打开仓库的 **Settings > Pages**。
2. 在 **Build and deployment > Source** 里选择 **GitHub Actions**。
3. 保存后，把文章推到 `main`，等 Actions 里的 “Deploy GitHub Pages” 成功。

站点地址是用户主页 `https://xunfeng-1.github.io`，不需要再填自定义域名。
