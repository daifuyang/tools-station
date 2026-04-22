"use client";

import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MarkdownPreview } from "@/components/markdown/markdown-preview";
import { UrlInput } from "@/components/markdown/url-input";
import { FileUpload } from "@/components/markdown/file-upload";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const defaultContent = `# 欢迎使用 Markdown 预览

这是一个示例文档，展示支持的特性。

## 代码高亮

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

## 表格

| 功能 | 状态 |
|------|------|
| GFM 表格 | ✅ |
| 任务列表 | ✅ |
| 代码高亮 | ✅ |

## 任务列表

- [x] 创建项目
- [x] 添加组件
- [ ] 编写文档

## 链接和引用

> 这是一段引用文本

[访问 GitHub](https://github.com)

---

开始编辑或上传你的 Markdown 文件吧！`;

export default function MarkdownPage() {
  const [content, setContent] = useState(defaultContent);
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold">Markdown 预览</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="url">链接加载</TabsTrigger>
            <TabsTrigger value="upload">文件上传</TabsTrigger>
            <TabsTrigger value="preview">预览</TabsTrigger>
          </TabsList>

          <TabsContent value="url" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>从链接加载 Markdown</CardTitle>
              </CardHeader>
              <CardContent>
                <UrlInput onLoad={(text) => {
                  setContent(text);
                  setActiveTab("preview");
                }} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>上传本地文件</CardTitle>
              </CardHeader>
              <CardContent>
                <FileUpload onLoad={(text) => {
                  setContent(text);
                  setActiveTab("preview");
                }} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview">
            <Card>
              <CardHeader>
                <CardTitle>预览</CardTitle>
              </CardHeader>
              <CardContent>
                <MarkdownPreview content={content} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}