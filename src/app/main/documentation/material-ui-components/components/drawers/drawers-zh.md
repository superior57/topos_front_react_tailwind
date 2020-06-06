---
title: React Drawer（抽屉）组件
components: Drawer, SwipeableDrawer
---

# Drawer（抽屉）

<p class="description">导航抽屉可以访问您应用中的目标地址。侧边栏包含了补充的内容，而它被固定在屏幕的左侧或右侧。</p>

[Navigation drawers](https://material.io/design/components/navigation-drawer.html) 使得用户能够访问目标地址和一些应用功能，例如切换帐户。 它们既可以永久在屏幕上，也可以由一个导航菜单图标控制。

[Side sheets](https://material.io/design/components/sheets-side.html)主要在平板和桌面上作为辅助的平面使用。

## 临时抽屉

临时抽屉可以在打开和关闭之间切换。默认的情况是关闭，直到选择一个节之前，抽屉会暂时在所有其他内容之上保持打开的状态。

单击 overlay 或者按 Esc 键可以关闭抽屉。通过操作 `open` 属性，选择抽屉中的一项也会关闭抽屉。

{{"demo": "pages/components/drawers/TemporaryDrawer.js"}}

## 可滑动的临时抽屉

您可以使用 `SwipeableDrawer` 组件来实现滑动抽屉。

此组件附带 2 kB gzip 的负载开销。 一些低端移动设备无法以60 FPS 的速度跟随手指的移动。 您可以使用 `disableBackdropTransition` 属性来解决这个问题。

{{"demo": "pages/components/drawers/SwipeableTemporaryDrawer.js"}}

在本文档中，我们使用以下一系列属性来最大化展示组件的功能: - iOS 在高端设备上托管。 我们可以在不丢帧的情况下启用背景转换。 这样展示令人足够满意了。 — iOS 有一个"滑动返回"的功能，它与 discovery（发现功能）冲突。 我们必须禁用它。

```jsx
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

<SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />
```

## 响应式抽屉

利用` Hidden `组件，可以根据屏幕宽度显示不同类型的抽屉。 显示小屏幕的 `temporary` 抽屉，而更宽屏幕显示 `permanent` 抽屉。

{{"demo": "pages/components/drawers/ResponsiveDrawer.js", "iframe": true}}

## 持久的抽屉

持久抽屉可以在打开或关闭之间切换。 抽屉与内容位于同一表面的高度上。 它默认情况下是关闭的，可通过选择菜单图标打开，直到用户选择关闭之前，它都会保持打开状态。 在不同操作和不同节点切换时，抽屉的状态都会被记住。

当抽屉位于页面网格之外并打开时，抽屉会强制其他内容更改大小并适应较小的视口。

如果是比移动设备更大的尺寸，我们推荐使用持久性导航抽屉。而对于具有多级层次结构且需要使用向上箭头进行导航的应用，我们则不建议使用它们。

{{"demo": "pages/components/drawers/PersistentDrawerLeft.js", "iframe": true}}

{{"demo": "pages/components/drawers/PersistentDrawerRight.js", "iframe": true}}

## 迷你变体抽屉

在这种情况下，持久的抽屉会更改其宽度。 它的静止状态是一个与其内容相同的迷你抽屉，并且被应用栏夹住。 展开后，它将显示为标准的持久的导航抽屉。

若需要快速选择访问内容的应用部分的情况，我们建议您使用迷你变体抽屉。

{{"demo": "pages/components/drawers/MiniDrawer.js", "iframe": true}}

## 固定的抽屉

固定的抽屉始终可见并固定在左侧，与内容或背景位于同一高度。而他们无法被关闭。

**在桌面情况下，我们推荐的默认值是**固定的抽屉。

### 全高导航栏

应用程序应该注重通过从左到右层次结构的布局的信息消费。

{{"demo": "pages/components/drawers/PermanentDrawerLeft.js", "iframe": true}}

{{"demo": "pages/components/drawers/PermanentDrawerRight.js", "iframe": true}}

### 从应用栏下开始分割

一些专注于生产力的应用，需要保持在整个屏幕上的平衡。

{{"demo": "pages/components/drawers/ClippedDrawer.js", "iframe": true}}