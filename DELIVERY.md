# 前端交付文档

## 项目概述
本项目为移动端创作页与积分弹窗的前端实现，使用 React + Vite 构建。包含页面主体、积分弹窗、动效与样式定义，可直接用于前端联调与部署。

## 交付内容
- 入口与渲染：[main.tsx](file:///Users/bytedance/Desktop/Coding/Pippit%20credit/src/main.tsx)
- 页面与交互逻辑：[App.tsx](file:///Users/bytedance/Desktop/Coding/Pippit%20credit/src/App.tsx)
- 全局样式与动效：[index.css](file:///Users/bytedance/Desktop/Coding/Pippit%20credit/src/index.css)
- 资源文件：src/assets 目录（弹窗背景图、图标等）
- 构建配置：[vite.config.ts](file:///Users/bytedance/Desktop/Coding/Pippit%20credit/vite.config.ts)
- 依赖清单与脚本：[package.json](file:///Users/bytedance/Desktop/Coding/Pippit%20credit/package.json)
- 项目说明：[README.md](file:///Users/bytedance/Desktop/Coding/Pippit%20credit/README.md)

## 关键实现说明
- 弹窗展示：RewardModal 通过 AnimatePresence 控制显示与动画，点击蒙层关闭。
- 交互状态：积分领取逻辑由 creditCount、isStarRotated、status 管理，触发动画并更新顶部展示。
- 光晕动画：GlowingCapsule 使用 SVG 渐变与模糊滤镜实现内阴影环绕效果，动画时序由 index.css 中的 keyframes 控制。

## 构建与运行
- 安装依赖：npm i
- 本地开发：npm run dev
- 生产构建：npm run build
- 构建产物：dist 目录

## 部署说明
- Vercel 部署输出目录为 dist
- Build Command 为 npm run build

## 交付注意事项
- 交互和视觉细节均集中在 App.tsx 与 index.css 中，联调时优先从这两个文件定位调整点。
