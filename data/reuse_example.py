# -*- coding: utf-8 -*-
"""二次利用示例：只用开放数据层，重绘「港口—航线」与「术语门类」两张图。

目的：证明本作品的数据**可以被别人拿去用**，而不只是给自己看。
运行：py -X utf8 reuse_example.py   （仅需标准库 + matplotlib，若无 matplotlib 则只打印统计）
"""
import io
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))


def load(name):
    return json.load(io.open(os.path.join(HERE, name), encoding="utf-8"))["records"]


ports = load("ports.json")
routes = load("routes.json")
terms = load("terminology.json")
tl = load("timeline.json")

print(f"港口 {len(ports)} / 航线 {len(routes)} / 术语 {len(terms)} / 时间线 {len(tl)}")

# ① 航线密度：每个港口被多少条航线连接
deg = {p["id"]: 0 for p in ports}
for r in routes:
    deg[r["from"]] = deg.get(r["from"], 0) + 1
    deg[r["to"]] = deg.get(r["to"], 0) + 1
top = sorted(deg.items(), key=lambda x: -x[1])[:5]
name = {p["id"]: p.get("n") or p.get("e") for p in ports}
print("\n连接度最高的 5 个节点：")
for pid, d in top:
    print(f"  {name.get(pid, pid):14s} {d} 条")

# ② 术语门类分布
from collections import Counter
cnt = Counter(t["key"] for t in terms)
print("\n术语门类分布（前 6）：")
for k, v in cnt.most_common(6):
    print(f"  {k:16s} {v}")

# ③ 可选出图
try:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    fig, ax = plt.subplots(figsize=(9, 6))
    for r in routes:
        a = next(p for p in ports if p["id"] == r["from"])
        b = next(p for p in ports if p["id"] == r["to"])
        ax.plot([a["lon"], b["lon"]], [a["lat"], b["lat"]], lw=0.8, alpha=0.55,
                color="#3E6E9E")
    ax.scatter([p["lon"] for p in ports], [p["lat"] for p in ports], s=26, color="#B08155",
               zorder=3)
    ax.set_title("Route network rebuilt from open data (reuse_example.py)")
    ax.set_xlabel("longitude")
    ax.set_ylabel("latitude")
    fig.tight_layout()
    out = os.path.join(HERE, "reuse_routes.png")
    fig.savefig(out, dpi=150)
    print("\n✓ 已出图:", out)
except ImportError:
    print("\n（未安装 matplotlib，跳过出图；统计结果已打印）")
