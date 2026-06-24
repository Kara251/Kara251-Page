# Kara251 Page

这个仓库现在是纯静态首页，目标域名是 `www.kara251.com`，部署方式是 Cloudflare Pages。

## 技术栈

- 纯静态 HTML / CSS / JavaScript
- `public/` 直接作为 Pages 输出目录
- Wrangler 只负责本地预览和 Pages 部署

## 目录结构

```text
.
├── public/
│   ├── index.html
│   ├── 404.html
│   ├── site.css
│   ├── site.js
│   └── _headers
├── wrangler.jsonc
├── package.json
└── README.md
```

## 当前页面特性

- 纯黑背景
- 三组轮廓大字扫屏：`Veritas`、`Claritas`、`Amor`
- 主标题以打字机方式逐行出现
- 首次进入强制语言选择，并覆盖 `tc` / `sc` / `hx` / `wy` / `en` / `yue` / `ja`
- 不保存 cookie，不记住语言
- 页面响应头设置为 `no-store`
- 运行时会主动清理 storage、cache、service worker
- 外链按钮点击后红框强调，再新开标签页跳转
- `kara251.com` 会跳转到 `https://www.kara251.com`
- 已补齐 `robots.txt`、`sitemap.xml`、`llms.txt` 与结构化数据，方便 SEO / GEO

## 语言支持

当前沿用 `../material/exam-kara` 的语言集合：

- `tc` 繁中
- `sc` 简中
- `hx` 火星文
- `wy` 文言文
- `en` English
- `yue` 粵語
- `ja` 日本語

## 本地预览

安装依赖：

```bash
npm install
```

启动本地预览：

```bash
npm run dev
```

默认地址：

```text
http://127.0.0.1:4173
```

做一次脚本检查：

```bash
npm run check
```

## Cloudflare Pages

`wrangler.jsonc` 已经声明：

- `name: kara251-page`
- `pages_build_output_dir: ./public`

首次部署前，先登录 Wrangler：

```bash
npx wrangler login
```

然后把 `public/` 部署到 Pages：

```bash
npm run deploy
```

当前 `deploy` 脚本默认使用的 Pages 项目名是 `kara251-page`。如果你在线上实际创建的项目名不同，改一下 `package.json` 里的 `--project-name` 即可。

## 自定义域名说明

这个仓库现在内建了 apex 规范域跳转逻辑：

- 如果请求已经落到这个 Pages 项目上，且域名是 `kara251.com`
- 页面会立刻跳转到 `https://www.kara251.com`，并保留原路径、查询参数和 hash

要让这件事真正在线上生效，还需要 Cloudflare Pages 把这些域名接到同一个项目：

- `www.kara251.com`
- `kara251.com`

如果 Cloudflare 后台里自定义域名状态还是 `pending`，说明 DNS 或证书验证还没完全结束；仓库代码已经能处理跳转，但域名本身仍要在 Pages 侧接通。

## 缓存与安全

`public/_headers` 已经设置：

- `Cache-Control: no-store, no-cache, must-revalidate`
- `Pragma: no-cache`
- `Expires: 0`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: SAMEORIGIN`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy: same-origin`
