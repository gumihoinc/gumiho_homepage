# GUMIHO TRAVEL / 寻美旅行社

无需构建工具的中韩双语静态网站，可直接由 GitHub Pages 发布。

## 本地预览

在项目目录启动任意静态文件服务器，例如：

    python -m http.server 8080

然后访问 http://localhost:8080/ 。直接打开 index.html 也可浏览，但建议使用静态服务器检查最终效果。

## 正式上线前必须确认

- 用公司审核通过的名称、简介、服务范围和条款替换当前概念文案。
- 补充真实的企业联系电话、邮箱及依法需要展示的主体/许可信息；正式发布前复核现有地址、咨询时间与社媒账号。
- 将咨询表单连接到公司批准的咨询渠道；当前表单只在浏览器内生成摘要，不上传或保存数据。
- 核对全部行程描述，不应把示例路线理解为固定商品、价格或承诺。
- 确认 assets/images/ 内图片的最终授权和署名要求，详见 ATTRIBUTIONS.md；若替换图片，请同步更新该文件。
- 正式公开后删除 index.html 中的 noindex, nofollow，并补充隐私政策、服务条款和必要的 Cookie/数据说明。
- 如使用独立域名，按 GitHub Pages 要求增加 CNAME 并完成 DNS 配置。

## 文件结构

- index.html：页面内容和结构
- styles.css：设计系统、图片路径及响应式样式
- script.js：中韩文切换、移动导航、FAQ 和预览表单交互
- assets/images/：本地旅行图片
- .github/workflows/pages.yml：GitHub Pages 自动部署

图片路径集中在 styles.css 顶部的 CSS 变量中，方便上线前统一替换。
