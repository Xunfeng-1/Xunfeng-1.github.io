---
title: 运动
date: 2026-11-06 12:00:00
layout: page
active_menu: workouts
breadcrumb: false
banner:
  enabled: false
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
    body:has(#workout-dashboard) {
      height: 100dvh;
      overflow: hidden;
    }
    body:has(#workout-dashboard) .site-shell,
    body:has(#workout-dashboard) .site-workspace {
      height: 100dvh;
      min-height: 0;
      overflow: hidden;
    }
    body:has(#workout-dashboard) .site-main {
      max-width: none;
      width: 100%;
      height: 100%;
      min-height: 0;
      padding: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    @media screen and (min-width: 1181px) {
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
      flex: 1 1 auto;
      height: 100%;
      min-height: 0;
      margin: 0;
      padding: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    body:has(#workout-dashboard) #workout-dashboard {
      flex: 1 1 auto;
      width: 100%;
      height: 100%;
      min-height: 0;
      border: 0;
      border-radius: 0;
      background: #fff;
      display: block;
    }
    </style>
---

<iframe
  id="workout-dashboard"
  title="运动"
  src="https://xunfeng-1.github.io/workouts/"
></iframe>
