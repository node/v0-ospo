# OSPO 内部门户

简体中文 | [English](./README.md)

开源项目办公室（OSPO）的内部门户站点。汇聚开源战略、项目、合规、治理、
资源、动态以及基金会会员信息。

## 功能模块

- **首页** — 多图轮播 Hero、最新开源动态、愿景使命与职责、团队介绍、
  基金会与行业组织会员（Linux Foundation、CNCF、AAIF、TODO Group、
  OpenSSF、ASF）、内外部资源链接
- **能力建设** — 里程碑时间线，进度由完成情况自动推算
- **项目列表** — 内部项目 / 外部贡献 / 对外开源
- **开源合规** — License 度量、政策、知识库、SCA 工具、供应链健康
  （总分 + 5 个维度）
- **治理政策** — 政策、组织架构、操作流程
- **资源中心** — 流程、指南、成功案例（支持搜索）
- **开源社区** — 跳转至内部技术社区
- 完整支持 **中文 / English**，偏好持久化于 `localStorage`
- 暗色 / 浅色 / 跟随系统主题

## 技术栈

Next.js 15（App Router，静态导出）· React 19 · TypeScript · Tailwind CSS
· shadcn/ui（Radix）· embla-carousel · vitest

## 快速开始

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck    # tsc --noEmit
pnpm test         # vitest run
pnpm build        # 静态导出到 ./out
```

需要 Node 20+ 与 pnpm 9+。可选环境变量 `NEXT_PUBLIC_INTERNAL_GIT_BASE`
（见 `.env.example`）。

## 目录结构

```
app/                    # 路由（每个路由一个 page.tsx + layout.tsx）
components/             # 业务组件与 shadcn/ui 原子组件
lib/data/               # 全部硬编码内容（projects、foundations、news…）
lib/i18n/locales/       # en.json / zh.json（中英对齐有测试保障）
public/foundations/     # 本地化的基金会 LOGO
tests/                  # vitest 单测
```

## 贡献与安全

- 提交 PR 前请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。
- 安全问题请按 [SECURITY.md](./SECURITY.md) 流程上报，**请勿**直接提
  Issue。
- AI 编码助手请额外阅读 [AGENTS.md](./AGENTS.md)。

## 许可证

MIT — 见 [LICENSE](./LICENSE)。

社区：[https://ospo.cc](https://ospo.cc)
