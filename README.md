# 釉下之蓝 · Blue Under the Glaze

**一座瓷都的十个世纪 —— 中英双语交互式数字出版物**
Ten Centuries of a Porcelain Capital — a bilingual interactive digital publication

[![selftest](https://github.com/secret-justice/blue-under-the-glaze/actions/workflows/test.yml/badge.svg)](https://github.com/secret-justice/blue-under-the-glaze/actions/workflows/test.yml)
[![Deploy](https://github.com/secret-justice/blue-under-the-glaze/actions/workflows/pages.yml/badge.svg)](https://github.com/secret-justice/blue-under-the-glaze/actions/workflows/pages.yml)

## 在线访问

- 中文：https://secret-justice.github.io/blue-under-the-glaze/
- 英文直链：https://secret-justice.github.io/blue-under-the-glaze/index.html?lang=en
- 单文件离线版：`single.html`（4.73 MB，双击即开，断网可用）

## 这个仓库里有什么

| 内容 | 说明 |
|---|---|
| `index.html` / `app.js` / `style.css` | 零依赖前端（原生 JS/CSS/SVG） |
| `data/` | 开放数据层：10 个 JSON 数据集 + 数据字典 `schema.md` |
| `selftest.py` | 仓库自检：JSON 完整性、资源引用、零外部依赖、结构齐备（CI 自动跑） |
| `single.html` | 全内联单文件版 |
| `CITATION.cff` | 引用元数据 |

## 自检与部署

```bash
python selftest.py          # 本地自检（CI 同款）
```

推送即自动部署到 GitHub Pages（`.github/workflows/pages.yml`）。

## 声明

作品全部文本、数据、可视化与代码为参赛团队原创；参考来源在作品内「研究方法与资料来源」模块列明，
仅作参考、非底本。AI 使用情况已在作品内完整披露。
