# Kara251 Page

这个仓库已经按“纯静态站 + Cloudflare Wrangler 部署”准备好了。

当前策略：

- `www.kara251.com` 提供静态站内容
- `kara251.com` 统一 `308` 跳到 `https://www.kara251.com`
- `*.kara251.com` 也统一跳到 `https://www.kara251.com`
- 站点静态文件统一放在 `public/`

## 目录结构

```text
.
├── public/            # 你的静态站文件
├── worker.js          # 只负责域名规范化和转发到静态资源
├── wrangler.jsonc     # Cloudflare Wrangler 配置
├── package.json
└── README.md
```

## 你后面怎么放站点

直接把可发布的静态文件放进 `public/` 即可。

例如：

- `public/index.html`
- `public/assets/...`
- `public/favicon.ico`

如果你以后改用某个静态生成器，也建议把最终产物输出到 `public/`，这样不用改部署流程。

## 本地使用

先安装依赖：

```bash
npm install
```

本地预览：

```bash
npm run dev
```

部署前做一次本地检查：

```bash
npm run check
```

正式部署：

```bash
npm run deploy
```

Wrangler 日志会写到仓库内的 `.wrangler/logs/`，不会污染系统全局目录。

## Cloudflare 准备

### 1. 把 `kara251.com` 这个 zone 放到 Cloudflare

这是前提，不然 Wrangler 的域名和路由配置不会生效。

### 2. 登录 Wrangler

二选一：

```bash
npx wrangler login
```

或者使用 API Token / Account ID 环境变量。

### 3. 为根域名和通配子域名准备 DNS

因为 `www.kara251.com` 用的是 Custom Domain，Wrangler 首次部署时会自动创建对应 DNS 和证书。

但 `kara251.com/*` 和 `*.kara251.com/*` 这两个是 Route，Cloudflare 官方要求它们对应的域名本身也要有代理中的 DNS 记录，才能让请求进入 Worker。

建议在 Cloudflare DNS 里额外加这两条“占位但开启代理”的记录：

- `@` -> `192.0.2.0`，`Proxied`
- `*` -> `192.0.2.0`，`Proxied`

也可以用 `AAAA` 指向 `100::`，效果一样。

这些是 Cloudflare 官方文档里给 originless setup / redirect 用的保留占位地址，请求不会真的打到这个 IP。

## 当前 Wrangler 行为

`wrangler.jsonc` 里已经配好：

- `www.kara251.com` 作为 Custom Domain
- `kara251.com/*` 作为 Route
- `*.kara251.com/*` 作为 Route
- `public/` 作为静态资源目录
- `run_worker_first: true`，确保先执行 Worker，再决定是否返回静态资源

这一点很重要：如果不先跑 Worker，某些子域名请求可能会直接命中静态文件，而不会跳转到 `www`。

## 部署后的预期结果

- 访问 `https://www.kara251.com`：返回你的静态站
- 访问 `https://kara251.com`：跳到 `https://www.kara251.com`
- 访问 `https://anything.kara251.com/path?q=1`：跳到 `https://www.kara251.com/path?q=1`

## 备注

- 当前放了一个极简占位 `public/index.html`，只是为了让仓库开箱可用，你后面直接替换掉就行。
- 当前用的是 `wrangler.jsonc`，因为 Cloudflare 现在对新项目推荐 JSONC 配置。
- 不要把 `.dev.vars`、`.env` 一类文件提交进 Git。
