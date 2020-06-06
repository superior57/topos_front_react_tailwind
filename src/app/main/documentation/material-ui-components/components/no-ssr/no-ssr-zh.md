---
title: 没有SSR React组件
components: NoSsr
---

# 没有SSR

<p class="description">NoSsr故意从服务器端渲染（SSR）主题中删除组件。</p>

该组件可用于各种情况：

- 逃避破坏依赖性的孵化不支持SSR。
- 通过仅在首屏上呈现来改善客户端上的首次绘制时间。
- 减少服务器上的渲染时间。
- 在过重的服务器负载下，您可以打开服务降级。
- 仅通过渲染重要内容（使用 `defer` 属性）来改善交互时间。

## 客户方推迟

{{"demo": "pages/components/no-ssr/SimpleNoSsr.js"}}

## 帧推迟

在它的核心，NoSsr组件的目的是 **延迟渲染**。 如上一个演示中所示，您可以使用它将渲染从服务器推迟到客户端。

But you can also use it to defer the rendering within the client itself. You can **wait a screen frame** with the `defer` property to render the children. React does [2 commits](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) instead of 1.

{{"demo": "pages/components/no-ssr/FrameDeferring.js"}}