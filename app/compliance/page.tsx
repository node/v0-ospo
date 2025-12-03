"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  FileText,
  BarChart3,
  BookOpen,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Mail,
  Phone,
} from "lucide-react"

export default function CompliancePage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("policy")

  const policies = [
    {
      title: t("compliance.policy.license.title"),
      description: t("compliance.policy.license.desc"),
    },
    {
      title: t("compliance.policy.review.title"),
      description: t("compliance.policy.review.desc"),
    },
    {
      title: t("compliance.policy.contacts.title"),
      description: t("compliance.policy.contacts.desc"),
    },
  ]

  const metrics = {
    overview: [
      { label: t("compliance.metrics.scanned"), value: 1247, change: "+12%" },
      { label: t("compliance.metrics.compliant"), value: 1198, change: "+8%" },
      { label: t("compliance.metrics.issues"), value: 49, change: "-15%" },
      { label: t("compliance.metrics.rate"), value: "96.1%", change: "+2.3%" },
    ],
    licenseDistribution: [
      { name: "MIT", count: 456, percentage: 38, status: "allowed" },
      { name: "Apache-2.0", count: 324, percentage: 27, status: "allowed" },
      { name: "BSD-3-Clause", count: 198, percentage: 16, status: "allowed" },
      { name: "GPL-3.0", count: 89, percentage: 7, status: "review" },
      { name: "LGPL-2.1", count: 67, percentage: 6, status: "review" },
      { name: t("compliance.metrics.other"), count: 64, percentage: 5, status: "review" },
    ],
  }

  const knowledgeBase = [
    {
      category: t("compliance.kb.guides"),
      items: [
        { title: t("compliance.kb.guide1"), type: "PDF" },
        { title: t("compliance.kb.guide2"), type: "Wiki" },
        { title: t("compliance.kb.guide3"), type: "PDF" },
      ],
    },
    {
      category: t("compliance.kb.faqs"),
      items: [
        { title: t("compliance.kb.faq1"), type: "Wiki" },
        { title: t("compliance.kb.faq2"), type: "Wiki" },
        { title: t("compliance.kb.faq3"), type: "Wiki" },
      ],
    },
    {
      category: t("compliance.kb.training"),
      items: [
        { title: t("compliance.kb.training1"), type: "Video" },
        { title: t("compliance.kb.training2"), type: "Video" },
        { title: t("compliance.kb.training3"), type: "Course" },
      ],
    },
  ]

  const scaTools = [
    {
      name: "Black Duck",
      description: t("compliance.tools.blackduck"),
      status: "active",
      url: "#",
    },
    {
      name: "Snyk",
      description: t("compliance.tools.snyk"),
      status: "active",
      url: "#",
    },
    {
      name: "FOSSA",
      description: t("compliance.tools.fossa"),
      status: "active",
      url: "#",
    },
    {
      name: "WhiteSource",
      description: t("compliance.tools.whitesource"),
      status: "evaluation",
      url: "#",
    },
  ]

  const contacts = [
    {
      name: t("compliance.contacts.lead"),
      role: t("compliance.contacts.leadRole"),
      email: "compliance-lead@example.com",
      phone: "+86 xxx-xxxx-xxxx",
    },
    {
      name: t("compliance.contacts.legal"),
      role: t("compliance.contacts.legalRole"),
      email: "legal@example.com",
      phone: "+86 xxx-xxxx-xxxx",
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{t("compliance.title")}</h1>
        <p className="text-muted-foreground mt-2">{t("compliance.subtitle")}</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="policy" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">{t("compliance.tab.policy")}</span>
          </TabsTrigger>
          <TabsTrigger value="metrics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">{t("compliance.tab.metrics")}</span>
          </TabsTrigger>
          <TabsTrigger value="knowledge" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">{t("compliance.tab.knowledge")}</span>
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            <span className="hidden sm:inline">{t("compliance.tab.tools")}</span>
          </TabsTrigger>
        </TabsList>

        {/* Policy Tab */}
        <TabsContent value="policy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("compliance.policy.overview")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {policies.map((policy, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-lg">{policy.title}</h3>
                  <p className="text-muted-foreground">{policy.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("compliance.contacts.title")}</CardTitle>
              <CardDescription>{t("compliance.contacts.desc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {contacts.map((contact, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <h4 className="font-semibold">{contact.name}</h4>
                        <p className="text-sm text-muted-foreground">{contact.role}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4" />
                          <span>{contact.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4" />
                          <span>{contact.phone}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Metrics Tab */}
        <TabsContent value="metrics" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-4">
            {metrics.overview.map((metric, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <Badge variant={metric.change.startsWith("+") ? "default" : "secondary"} className="mt-2">
                    {metric.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t("compliance.metrics.distribution")}</CardTitle>
              <CardDescription>{t("compliance.metrics.distributionDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {metrics.licenseDistribution.map((license, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{license.name}</span>
                      {license.status === "allowed" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {license.count} ({license.percentage}%)
                    </span>
                  </div>
                  <Progress value={license.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Knowledge Base Tab */}
        <TabsContent value="knowledge" className="space-y-6">
          {knowledgeBase.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-muted-foreground" />
                        <span>{item.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{item.type}</Badge>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* SCA Tools Tab */}
        <TabsContent value="tools" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("compliance.tools.title")}</CardTitle>
              <CardDescription>{t("compliance.tools.desc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {scaTools.map((tool, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{tool.name}</h3>
                            {tool.status === "active" ? (
                              <Badge className="bg-green-500">{t("compliance.tools.active")}</Badge>
                            ) : (
                              <Badge variant="secondary">{t("compliance.tools.evaluation")}</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{tool.description}</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("compliance.tools.integration")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>{t("compliance.tools.cicd")}</span>
                  </div>
                  <Badge>{t("compliance.tools.configured")}</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>{t("compliance.tools.repo")}</span>
                  </div>
                  <Badge>{t("compliance.tools.configured")}</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <span>{t("compliance.tools.sbom")}</span>
                  </div>
                  <Badge variant="secondary">{t("compliance.tools.inProgress")}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
