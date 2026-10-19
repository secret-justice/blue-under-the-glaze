# -*- coding: utf-8 -*-
"""仓库自检脚本 selftest.py（进 CI）：
   ① JSON 全部可解析 ② index.html 引用资源存在 ③ 无外部依赖 ④ 关键结构齐备
   ⑤ 单文件版完整 ⑥ 数据计数与文档声明一致"""
import io
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))  # 脚本放在站点根
P, F = [], []


def ck(name, cond, detail=""):
    (P if cond else F).append(name)
    print(f"  {'PASS' if cond else 'FAIL'}  {name}" + (f"  ({detail})" if detail else ""))


print("== 1. JSON 数据完整性 ==")
jsons = {}
for base, _d, fs in os.walk(ROOT):
    if ".git" in base:
        continue
    for f in fs:
        if f.endswith(".json"):
            p = os.path.join(base, f)
            try:
                d = json.load(io.open(p, encoding="utf-8"))
                jsons[os.path.relpath(p, ROOT).replace(os.sep, "/")] = d
            except Exception as e:
                ck(f"JSON 可解析: {f}", False, str(e)[:60])
ck("全部 JSON 可解析", True, f"{len(jsons)} 个")
for k, exp in (("data/terminology.json", 270), ("data/timeline.json", 12),
               ("data/ports.json", 19), ("data/routes.json", 19),
               ("data/objects.json", 10), ("data/readings.json", 6),
               ("data/notes_index.json", 6), ("data/trans_network.json", 12)):
    if k in jsons:
        d = jsons[k]
        n = d.get("count") if isinstance(d, dict) and "count" in d else len(d)
        ck(f"{k} 记录数 = {exp}", n == exp, f"实际 {n}")

print("\n== 2. index.html 引用资源存在 ==")
h = io.open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
refs = set(re.findall(r'(?:src|href)="([^"#][^"]*)"', h))
missing = [r for r in refs
           if not r.startswith(("http", "//", "mailto", "javascript", "data:"))
           and not os.path.exists(os.path.join(ROOT, r.split("?")[0]))]
ck("本地资源全部存在", not missing, f"缺 {missing[:4]}")

print("\n== 3. 零外部依赖 ==")
for fn in ("index.html", "app.js", "style.css", "data_glossary.js"):
    p = os.path.join(ROOT, fn)
    if not os.path.exists(p):
        continue
    t = io.open(p, encoding="utf-8", errors="replace").read()
    ext = re.findall(r'https?://[^"\'\s)]+', t)
    ext = [u for u in ext if "github.io" not in u and "github.com" not in u and "githubusercontent.com" not in u
           and "schema.org" not in u and "w3.org" not in u]
    ck(f"{fn} 无第三方请求", not ext, f"{ext[:2]}")

print("\n== 4. 关键结构齐备 ==")
for i in ("terms", "notes", "trans", "routes", "timeline", "read", "gallery",
          "transNet", "main"):
    ck(f"存在 #{i}", f'id="{i}"' in h)
ck("含 main 地标", "<main" in h)
ck("含 JSON-LD", "application/ld+json" in h)
ck("含 manifest", 'rel="manifest"' in h)

print("\n== 5. 单文件版 ==")
sp = os.path.join(ROOT, "single.html")
if os.path.exists(sp):
    sz = os.path.getsize(sp)
    ck("单文件版存在且 > 4 MB", sz > 4 * 1024 * 1024, f"{sz/1024/1024:.2f} MB")
    s = io.open(sp, encoding="utf-8", errors="replace").read()
    ck("单文件版无外部请求", not [u for u in re.findall(r'https?://[^"\'\s)]+', s)
            if 'github' not in u and 'schema.org' not in u and 'w3.org' not in u])
else:
    ck("单文件版存在", False)

print("\n== 6. 一致性 ==")
a = io.open(os.path.join(ROOT, "app.js"), encoding="utf-8").read()
for bad in ("译著", "翻译工程", "476 条", "93 万"):
    ck(f"无旧口径「{bad}」", bad not in a)
ck("标题为新名", "釉下之蓝" in h)
ck("参考资源卡存在", "参考资源与延伸阅读" in a)

print("\n" + "=" * 52)
print(f"通过 {len(P)} 项 / 失败 {len(F)} 项")
if F:
    for x in F:
        print("  FAIL:", x)
    sys.exit(1)
print("✅ ALL CHECKS PASSED")
