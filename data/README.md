# 开放数据层

本目录是作品结构化内容的**独立数据导出**，用于复核、二次利用与教学。

- 数据字典：见 `schema.md`
- 生成脚本：`_video/export_data.py`（从作品本体数据层导出，避免手工维护造成漂移）
- 校验脚本：`07_技术文档与运行说明/测试脚本/validate_data.py`

```bash
# 重新导出
py -X utf8 _video/export_data.py
# 校验
py -X utf8 submission/07_技术文档与运行说明/测试脚本/validate_data.py
```

> 为什么要单独导出：让"术语 270 条""航线 19 条"这类声明可以被**机器复算**，而不是只能人工数。
