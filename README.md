# 后屯村红色文旅导览应用

一个基于 React + Vite + Tailwind CSS 构建的红色文旅导览小程序原型。

## 项目简介

这是后屯村红色文旅基地的导览应用，提供智慧导览、研学预约、助农商城和个人中心等功能。

## 技术栈

- **前端框架**: React 18
- **构建工具**: Vite 5
- **样式方案**: Tailwind CSS 3
- **图标库**: Lucide React
- **开发语言**: JavaScript (ES Modules)

## 功能特性

### 1. 智慧导览
- 景点介绍（李兆麟故居、军事装备博览园、红色双创中心）
- 语音讲解
- VR全景导览
- 多语言切换（中文/英文/日文）

### 2. 研学预约
- 机关/团体研学预约表单
- 参观时长选择
- 解说服务选项
- 餐饮服务选择
- 出行方式选择

### 3. 助农商城
- 本地特色农产品展示
- 商品加入购物车功能

### 4. 个人中心
- 用户信息展示
- 我的订单
- 党课学习记录
- 意见反馈
- 适老化大字版切换
- 多语言设置

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
Tourism-Navigation-App/
├── src/
│   ├── components/
│   │   └── HoutunMiniProgram.jsx  # 主应用组件
│   ├── App.jsx                      # 应用入口组件
│   ├── main.jsx                     # React 挂载点
│   └── index.css                    # 全局样式
├── index.html                       # HTML 模板
├── package.json                     # 项目配置
├── vite.config.js                   # Vite 配置
├── tailwind.config.js               # Tailwind CSS 配置
└── postcss.config.js                # PostCSS 配置
```

## 开发说明

- 应用采用移动端设计风格，模拟微信小程序界面
- 使用 Tailwind CSS 实现响应式布局
- 组件化架构，便于维护和扩展

本项目采用CC BY-NC-SA 4.0 国际许可证，您可以在遵守许可证条款的前提下自由使用、修改和分发本项目的代码。