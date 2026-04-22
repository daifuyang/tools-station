# Tools Station

基于 Next.js + TailwindCSS 的工具集合站，一键部署到阿里云函数计算。

## 功能特点

- 基于 Next.js 16 (App Router)
- 使用 Turbopack 快速构建
- TailwindCSS 美化界面
- 阿里云函数计算 (FC) 无服务器部署
- 支持 SSR 和 API Routes

## 技术栈

- **前端框架**: Next.js 16.2.4
- **样式**: TailwindCSS 3.4
- **UI 组件**: Radix UI + Lucide Icons
- **部署平台**: 阿里云函数计算 FC3
- **工具**: Serverless Devs

## 快速部署

### 方式一：使用 Serverless Devs

```bash
# 安装 Serverless Devs
npm install -g @serverless-devs/s

# 配置阿里云密钥
s config add

# 初始化项目
s init tools-station -d ./my-tools-station

# 进入目录
cd my-tools-station

# 部署
s deploy
```

### 方式二：使用 CAP 控制台

1. 访问 [CAP 控制台](https://cap.console.aliyun.com)
2. 选择「创建项目」→「从模板创建」
3. 选择 Next.js 模板
4. 绑定 Git 仓库
5. 配置参数并部署

## 项目结构

```
tools-station/
├── src/                    # Next.js 源代码
│   ├── app/               # App Router 页面
│   ├── components/        # React 组件
│   └── lib/              # 工具函数
├── public/               # 静态资源
├── package.json
├── next.config.ts        # Next.js 配置
├── tailwind.config.ts    # TailwindCSS 配置
└── s.yaml               # Serverless Devs 配置
```

## 配置说明

| 参数 | 说明 | 默认值 |
|------|------|--------|
| region | 地域 | cn-shanghai |
| functionName | 函数名称 | tools-station |
| domain | 自定义域名 | tool.zerocmf.com |

## 本地开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 生产运行
npm start
```

## 许可证

MIT