# ToolNova — 程序化 SEO 工具站

一个**零成本、近全自动**的英文在线工具站,用「一套模板 + 数据」自动生成 **280+ 页面**(约 260 个单位换算长尾页 + 8 个独立工具 + 分类页 + 法务页),靠 **Google AdSense / 联盟** 变现。

> 现实预期:这是「搭一次、长期自动产钱」的资产,**不是 7 天暴富工具**。第 1 周收入≈0(等收录),第 2–4 周有自然流量,第 2–3 个月若排名起来才可能到几千~过万。多数同类站会失败,认真做 + 长期更新的少数能成。

---

## 技术栈

- **Astro**(静态生成,SEO 极佳,Core Web Vitals 高分)
- 纯静态输出 → 可免费部署到 Cloudflare Pages / Vercel / Netlify
- 所有工具在浏览器本地运行,**无后端、无服务器成本、隐私友好**

## 本地运行

```bash
npm install
npm run dev      # 开发预览 http://localhost:4321
npm run build    # 生成静态站点到 dist/
npm run preview  # 本地预览构建产物
```

## 目录结构

```
src/
  site.config.ts          # ⭐ 全站配置(改这里)
  lib/conversions.ts      # 单位换算引擎 + 所有单位数据
  data/tools.ts           # 独立工具注册表 + SEO 文案/FAQ
  layouts/                # BaseLayout(SEO 头)、ToolLayout
  components/             # Header / Footer / AdSlot / Breadcrumbs
  pages/
    index.astro           # 首页(带搜索)
    convert/[slug].astro  # 程序化换算页(每个单位对 = 1 页)
    category/[category].astro
    tools/*.astro         # 8 个独立工具
    about/contact/privacy/terms/404
    robots.txt.ts / ads.txt.ts
public/                   # favicon、og 图
```

---

## 上线前必改(`src/site.config.ts`)

| 字段 | 说明 |
|---|---|
| `url` | **最重要**。部署后改成真实域名,如 `https://toolnova.pages.dev`。影响 canonical + sitemap |
| `name` / `tagline` | 站点品牌名与标语 |
| `email` | 联系邮箱(About/Privacy 页用) |
| `adsenseClient` | AdSense 过审后填 `ca-pub-xxxxxxxx`;留空则不加载广告脚本 |
| `ga4Id` | (可选)Google Analytics 4 衡量流量 |

## 如何「无限扩展」更多 SEO 页

- **加单位**:在 `src/lib/conversions.ts` 某个分类的 `units` 里加一个单位 → 自动新增几十个换算页。
- **加分类**:在 `categories` 里加一个新分类(如汇率、鞋码、字体单位)→ 自动生成整组页面。
- **加工具**:在 `src/data/tools.ts` 注册元数据,再到 `src/pages/tools/` 加一个 `.astro` 页。

每次 `npm run build` 都会把新页写进 sitemap。

---

## 免费部署(推荐 Cloudflare Pages)

1. 把项目推到 GitHub:
   ```bash
   git init && git add -A && git commit -m "init toolnova"
   git branch -M main
   git remote add origin <你的仓库地址>
   git push -u origin main
   ```
2. 登录 **Cloudflare Pages** → Create project → 连接该 GitHub 仓库。
3. 构建设置:**Build command** = `npm run build`,**Output directory** = `dist`。
4. 部署完成后得到免费域名 `xxx.pages.dev`(也可绑自有域名)。
5. 回到 `src/site.config.ts` 把 `url` 改成正式地址,重新 push 即可。

> Vercel 同理:Framework 选 Astro,自动识别。

## 接入 Google AdSense(过审 → 变现)

1. 站点上线、有一定原创内容后,去 [AdSense](https://adsense.google.com) 提交站点。
2. 过审后拿到 `ca-pub-xxxxxxxxxxxxxxxx`,填进 `site.config.ts` 的 `adsenseClient`。
3. 重新部署 → 广告位与 `ads.txt` 自动生效。
4. 如需精细广告位,在 `src/components/AdSlot.astro` 调整 `data-ad-slot`。

> 注意:AdSense 偏好英文/全球流量、原创度、有 About/Privacy/Contact(本项目已内置)。国内挂广告需 ICP 备案,所以本站走海外 + 美元收款,省去备案。

---

## 每天 10–30 分钟维护清单(机器干不了的事)

**上线第 1 周**
- [ ] Google Search Console 验证站点,提交 `sitemap-index.xml`
- [ ] Bing Webmaster Tools 同样提交一遍
- [ ] 每天去 2–3 个相关社区(Reddit、Quora、论坛)自然地留下 1 条有用回答 + 链接(别刷)

**第 2 周起**
- [ ] 看 Search Console 的「查询/页面」,把有展现没点击的词,优化对应页标题/描述
- [ ] 每周用 AI 给 3–5 个热门页补充更详细的说明/示例(提升原创度与停留时间)
- [ ] 根据搜索热词,新增单位/工具(改 `conversions.ts` / `tools.ts`)

**持续**
- [ ] 流量达标后提交 AdSense;过审后填 `adsenseClient`
- [ ] 每月看一次 Analytics,砍掉没流量的方向,加码有流量的方向

---

## 红线提醒

不要刷量、买假流量、抄袭整页内容——AdSense 会封号。坚持「真实有用 + 原创说明 + 长期更新」。
