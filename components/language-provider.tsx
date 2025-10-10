"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "zh"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.capabilities": "Capabilities",
    "nav.projects": "Projects",
    "nav.resources": "Resources",

    // Home page
    "home.title": "Open Source Program Office",
    "home.subtitle": "Driving innovation through open source collaboration",
    "home.vision.title": "Our Vision",
    "home.vision.content":
      "To establish a thriving open source culture that drives innovation, collaboration, and technological excellence across our organization.",
    "home.mission.title": "Our Mission",
    "home.mission.content":
      "To enable and support open source adoption, contribution, and compliance throughout the organization while fostering a collaborative ecosystem with the broader open source community.",
    "home.responsibilities.title": "Key Responsibilities",
    "home.responsibilities.item1": "Open Source Strategy & Governance",
    "home.responsibilities.item2": "License Compliance & Risk Management",
    "home.responsibilities.item3": "Community Engagement & Contribution",
    "home.responsibilities.item4": "Developer Education & Enablement",
    "home.responsibilities.item5": "Project Incubation & Maintenance",
    "home.team.title": "Our Team",
    "home.team.director": "OSPO Director",
    "home.team.manager": "Program Manager",
    "home.team.engineer": "Open Source Engineer",
    "home.team.legal": "Legal Counsel",
    "home.team.developer": "Developer Advocate",
    "home.links.title": "Important Links",
    "home.links.internal": "Internal Resources",
    "home.links.external": "External Resources",
    "home.links.internal.developer-portal": "Developer Portal",
    "home.links.internal.legal-guidelines": "Legal Guidelines",
    "home.links.internal.contribution-workflow": "Contribution Workflow",
    "home.links.internal.training-resources": "Training Resources",
    "home.links.external.github-organization": "GitHub Organization",
    "home.links.external.open-source-initiative": "Open Source Initiative",
    "home.links.external.foss-compliance": "FOSS Compliance",
    "home.links.external.innersource-commons": "InnerSource Commons",

    // Capabilities page
    "capabilities.title": "Open Source Capabilities",
    "capabilities.subtitle": "Building excellence in open source practices",
    "capabilities.progress": "Progress",
    "capabilities.milestones": "Milestones",
    "capabilities.status.completed": "Completed",
    "capabilities.status.in-progress": "In Progress",
    "capabilities.status.planned": "Planned",
    "capabilities.governance.title": "Open Source Governance",
    "capabilities.governance.description":
      "Establishing policies, processes, and guidelines for open source usage and contribution",
    "capabilities.governance.milestones.policy-framework": "Policy Framework",
    "capabilities.governance.milestones.governance-committee": "Governance Committee",
    "capabilities.governance.milestones.compliance-tooling": "Compliance Tooling",
    "capabilities.governance.milestones.audit-process": "Audit Process",
    "capabilities.education.title": "Developer Education",
    "capabilities.education.description": "Training and resources for developers on open source best practices",
    "capabilities.education.milestones.basic-training": "Basic Training",
    "capabilities.education.milestones.advanced-workshops": "Advanced Workshops",
    "capabilities.education.milestones.certification-program": "Certification Program",
    "capabilities.education.milestones.mentorship-program": "Mentorship Program",
    "capabilities.contribution.title": "Contribution Strategy",
    "capabilities.contribution.description": "Strategic approach to contributing to external open source projects",
    "capabilities.contribution.milestones.contribution-guidelines": "Contribution Guidelines",
    "capabilities.contribution.milestones.project-selection-framework": "Project Selection Framework",
    "capabilities.contribution.milestones.contribution-metrics": "Contribution Metrics",
    "capabilities.contribution.milestones.community-leadership": "Community Leadership",
    "capabilities.innersource.title": "InnerSource Program",
    "capabilities.innersource.description": "Applying open source principles to internal development",
    "capabilities.innersource.milestones.innersource-guidelines": "InnerSource Guidelines",
    "capabilities.innersource.milestones.pilot-projects": "Pilot Projects",
    "capabilities.innersource.milestones.tooling-infrastructure": "Tooling & Infrastructure",
    "capabilities.innersource.milestones.organization-wide-rollout": "Organization-wide Rollout",
    "capabilities.security.title": "Security & Compliance",
    "capabilities.security.description": "Ensuring security and legal compliance in open source usage",
    "capabilities.security.milestones.security-scanning": "Security Scanning",
    "capabilities.security.milestones.license-compliance": "License Compliance",
    "capabilities.security.milestones.vulnerability-management": "Vulnerability Management",
    "capabilities.security.milestones.automated-compliance": "Automated Compliance",

    // Projects page
    "projects.title": "Open Source Projects",
    "projects.subtitle": "Our contributions to the open source ecosystem",
    "projects.internal": "Internal Projects",
    "projects.external": "External Contributions",
    "projects.status": "Status",
    "projects.active": "Active",
    "projects.maintenance": "Maintenance",
    "projects.incubating": "Incubating",
    "projects.repository": "Repository",
    "projects.maintainers": "Maintainers:",
    "projects.contribution": "Contribution:",
    "projects.contributors": "Contributors:",
    "projects.internal.openapi-framework.name": "OpenAPI Framework",
    "projects.internal.openapi-framework.description":
      "A framework for building and consuming RESTful APIs using OpenAPI specifications",
    "projects.internal.data-pipeline-toolkit.name": "Data Pipeline Toolkit",
    "projects.internal.data-pipeline-toolkit.description": "Tools for building scalable data processing pipelines",
    "projects.internal.ui-component-library.name": "UI Component Library",
    "projects.internal.ui-component-library.description": "Reusable UI components built with React",
    "projects.internal.config-manager.name": "Config Manager",
    "projects.internal.config-manager.description": "A configuration management library for distributed systems",
    "projects.external.kubernetes.name": "Kubernetes",
    "projects.external.kubernetes.description": "Container orchestration system",
    "projects.external.kubernetes.contribution": "Bug fixes and documentation improvements",
    "projects.external.tensorflow.name": "TensorFlow",
    "projects.external.tensorflow.description": "Machine learning framework",
    "projects.external.tensorflow.contribution": "Added new model optimization features",
    "projects.external.react.name": "React",
    "projects.external.react.description": "JavaScript library for building user interfaces",
    "projects.external.react.contribution": "Performance improvements and bug fixes",
    "projects.external.kafka.name": "Apache Kafka",
    "projects.external.kafka.description": "Distributed streaming platform",
    "projects.external.kafka.contribution": "New connector implementations",

    // Resources page
    "resources.title": "Resources & Guidelines",
    "resources.subtitle": "Policies, processes, and success stories",
    "resources.policies.title": "Policies & Guidelines",
    "resources.processes.title": "Processes",
    "resources.cases.title": "Success Cases",
    "resources.updated": "Updated:",
    "resources.view-policy": "View Policy",
    "resources.steps": "steps",
    "resources.view-process": "View Process",
    "resources.department": "Department:",
    "resources.impact": "Impact:",
    "resources.read-case-study": "Read Case Study",
    "resources.policies.contribution-policy.title": "Open Source Contribution Policy",
    "resources.policies.contribution-policy.description": "Guidelines for contributing to open source projects",
    "resources.policies.license-compliance.title": "Open Source License Compliance",
    "resources.policies.license-compliance.description": "Requirements for using open source software",
    "resources.policies.code-of-conduct.title": "Code of Conduct",
    "resources.policies.code-of-conduct.description": "Expected behavior when participating in open source communities",
    "resources.policies.ip-rights-management.title": "IP Rights Management",
    "resources.policies.ip-rights-management.description": "Intellectual property considerations for open source",
    "resources.processes.contribution-workflow.title": "Contribution Workflow",
    "resources.processes.contribution-workflow.description": "Step-by-step process for contributing to open source projects",
    "resources.processes.license-review-process.title": "License Review Process",
    "resources.processes.license-review-process.description": "How to get approval for using new open source components",
    "resources.processes.project-release-process.title": "Project Release Process",
    "resources.processes.project-release-process.description": "Steps to release an internal project as open source",
    "resources.processes.security-review-process.title": "Security Review Process",
    "resources.processes.security-review-process.description": "Security assessment for open source components",
    "resources.cases.cloud-infrastructure-optimization.title": "Cloud Infrastructure Optimization",
    "resources.cases.cloud-infrastructure-optimization.description":
      "How our team leveraged open source tools to optimize cloud costs by 35%",
    "resources.cases.machine-learning-pipeline.title": "Machine Learning Pipeline",
    "resources.cases.machine-learning-pipeline.description":
      "Building an ML pipeline with open source frameworks that reduced development time by 60%",
    "resources.cases.developer-productivity-tools.title": "Developer Productivity Tools",
    "resources.cases.developer-productivity-tools.description":
      "Internal tools built on open source that improved developer productivity by 25%",
    "resources.cases.customer-support-dashboard.title": "Customer Support Dashboard",
    "resources.cases.customer-support-dashboard.description":
      "Open source visualization tools that improved response time by 40%",

    // Footer
    "footer.copyright": "© 2025 OSPO. All rights reserved.",
    "footer.contact": "Contact Us",
  },
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.capabilities": "能力建设",
    "nav.projects": "项目列表",
    "nav.resources": "资源中心",

    // Home page
    "home.title": "开源项目办公室",
    "home.subtitle": "通过开源协作推动创新",
    "home.vision.title": "我们的愿景",
    "home.vision.content": "建立蓬勃发展的开源文化，推动整个组织的创新、协作和技术卓越。",
    "home.mission.title": "我们的使命",
    "home.mission.content": "在整个组织中支持开源采用、贡献和合规，同时与更广泛的开源社区建立协作生态系统。",
    "home.responsibilities.title": "主要职责",
    "home.responsibilities.item1": "开源战略与治理",
    "home.responsibilities.item2": "许可证合规与风险管理",
    "home.responsibilities.item3": "社区参与与贡献",
    "home.responsibilities.item4": "开发者教育与赋能",
    "home.responsibilities.item5": "项目孵化与维护",
    "home.team.title": "我们的团队",
    "home.team.director": "OSPO 主管",
    "home.team.manager": "项目经理",
    "home.team.engineer": "开源工程师",
    "home.team.legal": "法律顾问",
    "home.team.developer": "开发者倡导者",
    "home.links.title": "重要链接",
    "home.links.internal": "内部资源",
    "home.links.external": "外部资源",
    "home.links.internal.developer-portal": "开发者门户",
    "home.links.internal.legal-guidelines": "法律指南",
    "home.links.internal.contribution-workflow": "贡献工作流",
    "home.links.internal.training-resources": "培训资源",
    "home.links.external.github-organization": "GitHub 组织",
    "home.links.external.open-source-initiative": "开源促进会",
    "home.links.external.foss-compliance": "FOSS 合规性",
    "home.links.external.innersource-commons": "内部开源社区",

    // Capabilities page
    "capabilities.title": "开源能力建设",
    "capabilities.subtitle": "构建开源实践卓越能力",
    "capabilities.progress": "进度",
    "capabilities.milestones": "里程碑",
    "capabilities.status.completed": "已完成",
    "capabilities.status.in-progress": "进行中",
    "capabilities.status.planned": "计划中",
    "capabilities.governance.title": "开源治理",
    "capabilities.governance.description": "建立开源使用和贡献的政策、流程和指南",
    "capabilities.governance.milestones.policy-framework": "政策框架",
    "capabilities.governance.milestones.governance-committee": "治理委员会",
    "capabilities.governance.milestones.compliance-tooling": "合规工具",
    "capabilities.governance.milestones.audit-process": "审计流程",
    "capabilities.education.title": "开发者教育",
    "capabilities.education.description": "为开发者提供开源最佳实践的培训和资源",
    "capabilities.education.milestones.basic-training": "基础培训",
    "capabilities.education.milestones.advanced-workshops": "高级研讨会",
    "capabilities.education.milestones.certification-program": "认证计划",
    "capabilities.education.milestones.mentorship-program": "导师计划",
    "capabilities.contribution.title": "贡献策略",
    "capabilities.contribution.description": "为外部开源项目做贡献的战略方法",
    "capabilities.contribution.milestones.contribution-guidelines": "贡献指南",
    "capabilities.contribution.milestones.project-selection-framework": "项目选择框架",
    "capabilities.contribution.milestones.contribution-metrics": "贡献指标",
    "capabilities.contribution.milestones.community-leadership": "社区领导力",
    "capabilities.innersource.title": "内部开源计划",
    "capabilities.innersource.description": "将开源原则应用于内部开发",
    "capabilities.innersource.milestones.innersource-guidelines": "内部开源指南",
    "capabilities.innersource.milestones.pilot-projects": "试点项目",
    "capabilities.innersource.milestones.tooling-infrastructure": "工具与基础设施",
    "capabilities.innersource.milestones.organization-wide-rollout": "全组织推广",
    "capabilities.security.title": "安全与合规",
    "capabilities.security.description": "确保开源使用的安全和法律合规",
    "capabilities.security.milestones.security-scanning": "安全扫描",
    "capabilities.security.milestones.license-compliance": "许可证合规",
    "capabilities.security.milestones.vulnerability-management": "漏洞管理",
    "capabilities.security.milestones.automated-compliance": "自动化合规",

    // Projects page
    "projects.title": "开源项目",
    "projects.subtitle": "我们对开源生态系统的贡献",
    "projects.internal": "内部项目",
    "projects.external": "外部贡献",
    "projects.status": "状态",
    "projects.active": "活跃",
    "projects.maintenance": "维护中",
    "projects.incubating": "孵化中",
    "projects.repository": "仓库",
    "projects.maintainers": "维护者:",
    "projects.contribution": "贡献:",
    "projects.contributors": "贡献者:",
    "projects.internal.openapi-framework.name": "OpenAPI 框架",
    "projects.internal.openapi-framework.description": "一个用于使用 OpenAPI 规范构建和使用 RESTful API 的框架",
    "projects.internal.data-pipeline-toolkit.name": "数据管道工具包",
    "projects.internal.data-pipeline-toolkit.description": "用于构建可扩展数据处理管道的工具",
    "projects.internal.ui-component-library.name": "UI 组件库",
    "projects.internal.ui-component-library.description": "使用 React 构建的可重用 UI 组件",
    "projects.internal.config-manager.name": "配置管理器",
    "projects.internal.config-manager.description": "一个用于分布式系统的配置管理库",
    "projects.external.kubernetes.name": "Kubernetes",
    "projects.external.kubernetes.description": "容器编排系统",
    "projects.external.kubernetes.contribution": "错误修复和文档改进",
    "projects.external.tensorflow.name": "TensorFlow",
    "projects.external.tensorflow.description": "机器学习框架",
    "projects.external.tensorflow.contribution": "增加了新的模型优化功能",
    "projects.external.react.name": "React",
    "projects.external.react.description": "用于构建用户界面的 JavaScript 库",
    "projects.external.react.contribution": "性能改进和错误修复",
    "projects.external.kafka.name": "Apache Kafka",
    "projects.external.kafka.description": "分布式流处理平台",
    "projects.external.kafka.contribution": "新的连接器实现",

    // Resources page
    "resources.title": "资源与指南",
    "resources.subtitle": "政策、流程和成功案例",
    "resources.policies.title": "政策与指南",
    "resources.processes.title": "流程",
    "resources.cases.title": "成功案例",
    "resources.updated": "更新于:",
    "resources.view-policy": "查看政策",
    "resources.steps": "步",
    "resources.view-process": "查看流程",
    "resources.department": "部门:",
    "resources.impact": "影响:",
    "resources.read-case-study": "阅读案例研究",
    "resources.policies.contribution-policy.title": "开源贡献政策",
    "resources.policies.contribution-policy.description": "为开源项目做贡献的指南",
    "resources.policies.license-compliance.title": "开源许可证合规",
    "resources.policies.license-compliance.description": "使用开源软件的要求",
    "resources.policies.code-of-conduct.title": "行为准则",
    "resources.policies.code-of-conduct.description": "参与开源社区时的预期行为",
    "resources.policies.ip-rights-management.title": "知识产权管理",
    "resources.policies.ip-rights-management.description": "开源的知识产权注意事项",
    "resources.processes.contribution-workflow.title": "贡献工作流程",
    "resources.processes.contribution-workflow.description": "为开源项目做贡献的分步流程",
    "resources.processes.license-review-process.title": "许可证审查流程",
    "resources.processes.license-review-process.description": "如何获得使用新的开源组件的批准",
    "resources.processes.project-release-process.title": "项目发布流程",
    "resources.processes.project-release-process.description": "将内部项目作为开源发布的步骤",
    "resources.processes.security-review-process.title": "安全审查流程",
    "resources.processes.security-review-process.description": "开源组件的安全评估",
    "resources.cases.cloud-infrastructure-optimization.title": "云基础设施优化",
    "resources.cases.cloud-infrastructure-optimization.description": "我们的团队如何利用开源工具将云成本优化了35％",
    "resources.cases.machine-learning-pipeline.title": "机器学习管道",
    "resources.cases.machine-learning-pipeline.description": "使用开源框架构建机器学习管道，将开发时间缩短了60％",
    "resources.cases.developer-productivity-tools.title": "开发者生产力工具",
    "resources.cases.developer-productivity-tools.description": "基于开源构建的内部工具，将开发者生产力提高了25％",
    "resources.cases.customer-support-dashboard.title": "客户支持仪表板",
    "resources.cases.customer-support-dashboard.description": "开源可视化工具，将响应时间缩短了40％",

    // Footer
    "footer.copyright": "© 2025 OSPO. 保留所有权利。",
    "footer.contact": "联系我们",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "zh")) {
      setLanguage(savedLanguage)
    } else {
      // Default to browser language if available and supported
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "zh") {
        setLanguage("zh")
      }
    }
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

