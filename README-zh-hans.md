# OSPO 内部网站

简体中文 | [English](./README.md)

*自动同步到您的 [v0.app](https://v0.app) 部署*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/pecommunity/v0-ospo-internal-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/ZLCXfbp61qN)

## 项目简介

这是一个开源项目办公室（OSPO - Open Source Program Office）的内部网站。OSPO 是企业或组织内部专门负责开源及其治理相关事项的团队。本网站作为开源管理、合规和协作的中心枢纽。

## 功能特性

### 🏠 首页
- OSPO 愿景和使命展示
- 主要职责概览
- 团队组成和联系人信息
- 重要的内外部链接

### 🎯 能力建设
- 技术能力发展跟踪
- 社区参与度提升计划
- 培训项目和工作坊
- 法律与合规能力
- 指标和测量框架
- 里程碑进度可视化

### 📦 项目列表
- **内部开源项目**：组织内部开发和使用的项目
- **参与外部贡献**：对第三方开源项目的贡献
- **对外开源项目**：组织开源并维护的公开项目
- 项目元数据包括 Stars、Forks 和许可证信息

### 🛡️ 开源合规
- 许可证合规要求和审查流程
- 合规指标和统计数据
- 知识库（指南和常见问题）
- SCA（软件成分分析）工具集成
- **开源软件供应链**：跨安全性、维护性、社区活跃度、许可证合规和代码质量维度的健康度指标

### ⚖️ 治理政策
- 开源政策和标准
- 组织架构和治理委员会
- 运作流程和审批工作流
- 决策框架

### 📚 资源中心
- **流程与指南**：标准流程、快速入门指南、最佳实践和模板
- **成功案例**：展示开源采用影响力的真实案例研究

### 🌐 国际化
- 完整支持中文和英文
- 通过 UI 控件轻松切换语言
- 持久化语言偏好设置

## 技术栈

- **框架**: Next.js 15.5.9 (App Router)
- **样式**: Tailwind CSS
- **UI 组件**: shadcn/ui
- **图标**: Lucide React
- **语言**: TypeScript

## 快速开始

### 前置要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn

### 安装步骤

1. 克隆仓库：
```bash
git clone https://github.com/ospocc/v0-ospo.git
cd v0-ospo
```

2. 安装依赖：
```bash
npm install
# 或
yarn install
```

3. 启动开发服务器：
```bash
npm run dev
# 或
yarn dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

### 生产构建

```bash
npm run build
npm run start
# 或
yarn build
yarn start
```

## 项目结构

```
v0-ospo/
├── app/                      # Next.js App Router 页面
│   ├── page.tsx              # 首页
│   ├── capabilities/         # 能力建设页面
│   ├── projects/             # 项目列表页面
│   ├── compliance/           # 开源合规页面
│   ├── governance/           # 治理政策页面
│   └── resources/            # 资源中心页面
├── components/               # 可复用组件
│   ├── header.tsx            # 导航页头
│   ├── footer.tsx            # 站点页脚
│   └── language-provider.tsx # 国际化提供者
├── public/                   # 静态资源
└── ...
```

## 配置说明

### 默认语言

要更改默认语言，请编辑 `components/language-provider.tsx`：

```typescript
const [language, setLanguage] = useState<Language>("zh") // 改为 "en" 使用英文
```

### 主题颜色

在 `tailwind.config.ts` 和 `app/globals.css` 中自定义主题颜色。

## 部署

您的项目已部署至：

**[https://v0ospo.pages.dev](https://v0ospo.pages.dev)**

### 部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ospocc/v0-ospo)

## 贡献

本项目会自动与 [v0.app](https://v0.app) 双向同步。要贡献代码：

1. 在此处继续构建您的应用：**[https://v0.app/chat/projects/ZLCXfbp61qN](https://v0.app/chat/projects/ZLCXfbp61qN)**
2. 更改会自动推送到本仓库
3. Vercel 会自动部署最新版本

## 许可证

本项目采用 MIT 许可证。

## 支持

如有问题或需要支持，请联系 OSPO 团队或在本仓库中提交 issue。

OSPO 中文社区交流：[https://OSPO.CC](https://ospo.cc)
