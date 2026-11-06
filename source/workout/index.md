---
title: 运动
date: 2026-11-06 12:00:00
layout: page
active_menu: workouts
breadcrumb: false
comments:
  enabled: false
rightbar:
  enabled: false
  widgets: []
leftbar:
  widgets: []
inject:
  head_end: |
    <style>
    body:has(#workout-dashboard) .site-main {
      max-width: none;
      width: 100%;
    }
    @media screen and (min-width: 1024px) {
      body:has(#workout-dashboard) .site-workspace {
        grid-template-columns: auto minmax(0, 1fr);
      }
      body:has(#workout-dashboard) .site-main {
        grid-column: 2;
      }
    }
    body:has(#workout-dashboard) .page-footer {
      display: none;
    }
    body:has(#workout-dashboard) .md-text.content {
      padding-inline: 0;
      min-width: 0;
      overflow-wrap: anywhere;
    }
    body:has(#workout-dashboard) .md-text.content p {
      margin-bottom: 1rem;
      overflow-wrap: anywhere;
    }
    </style>
---

运动仪表盘即将上线。计划在单独的仓库里用 running_page 同步 Garmin 国际区的跑步记录，并发布到 <https://xunfeng-1.github.io/workouts/>。在那之前，下面的区域可能是空白的。

<iframe
  id="workout-dashboard"
  title="运动仪表盘"
  src="https://xunfeng-1.github.io/workouts/"
  style="width:100%;height:calc(100vh - 12rem);border:0;border-radius:8px;background:#fff;display:block"
  loading="lazy"
></iframe>
